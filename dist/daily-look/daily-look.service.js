"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DailyLookService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const userBookmarkDailyLook_entity_1 = require("./entities/userBookmarkDailyLook.entity");
const userLikeDailyLook_entity_1 = require("./entities/userLikeDailyLook.entity");
const typeorm_2 = require("typeorm");
const aws_service_1 = require("../aws/aws.service");
const pagination_dto_1 = require("../common/dto/pagination.dto");
const dailyLook_entity_1 = require("./entities/dailyLook.entity");
const dailyLookTag_entity_1 = require("./entities/dailyLookTag.entity");
const dailyLookComment_entity_1 = require("./entities/dailyLookComment.entity");
let DailyLookService = class DailyLookService {
    constructor(dailyLookRepository, dailyLookTagRepository, userBookmarkDailyLookRepository, userLikeDailyLookRepository, dailyLookCommentRepository, awsService, dataSource) {
        this.dailyLookRepository = dailyLookRepository;
        this.dailyLookTagRepository = dailyLookTagRepository;
        this.userBookmarkDailyLookRepository = userBookmarkDailyLookRepository;
        this.userLikeDailyLookRepository = userLikeDailyLookRepository;
        this.dailyLookCommentRepository = dailyLookCommentRepository;
        this.awsService = awsService;
        this.dataSource = dataSource;
    }
    async create(user, file, body) {
        const { text, title, dailyLookTag } = body;
        const dailyLookTagFromDb = await this.dailyLookTagRepository.findOneByOrFail({
            id: Number(dailyLookTag),
        });
        const imgUrl = await this.awsService.uploadFileToS3('dailyLook', file);
        this.dataSource.transaction(async (manager) => {
            const dailyLook = new dailyLook_entity_1.DailyLook();
            dailyLook.user = user;
            dailyLook.imgUrl = imgUrl;
            dailyLook.text = text;
            dailyLook.title = title;
            dailyLook.dailyLookTag = dailyLookTagFromDb;
            await manager.save(dailyLook);
        });
    }
    async getAll(user, pagination) {
        const [dailyLooks, total] = await this.dailyLookRepository
            .createQueryBuilder('dailyLook')
            .leftJoin('dailyLook.dailyLookTag', 'dailyLookTag')
            .leftJoin('dailyLook.user', 'user')
            .addSelect(['dailyLookTag.id', 'dailyLookTag.name'])
            .addSelect(['user.id', 'user.nickname'])
            .orderBy('dailyLook.createdAt', 'DESC')
            .skip(pagination.getOffset())
            .take(pagination.getLimit())
            .getManyAndCount();
        const items = await Promise.all(dailyLooks.map(async (dailyLook) => {
            const { likes } = await this.userLikeDailyLookRepository
                .createQueryBuilder('userLikeDailyLook')
                .select('COUNT(*)', 'likes')
                .where('userLikeDailyLook.dailyLook = :idDailyLook', {
                idDailyLook: dailyLook.id,
            })
                .getRawOne();
            const { isLiked } = await this.userLikeDailyLookRepository
                .createQueryBuilder('userLikeDailyLook')
                .select('COUNT(*)', 'isLiked')
                .where('userLikeDailyLook.user = :idUser', {
                idUser: user.id,
            })
                .andWhere('userLikeDailyLook.dailyLook = :idDailyLook', {
                idDailyLook: dailyLook.id,
            })
                .getRawOne();
            const { isBookmarked } = await this.userBookmarkDailyLookRepository
                .createQueryBuilder('userBookmarkDailyLook')
                .select('COUNT(*)', 'isBookmarked')
                .where('userBookmarkDailyLook.user = :idUser', {
                idUser: user.id,
            })
                .andWhere('userBookmarkDailyLook.dailyLook = :idDailyLook', {
                idDailyLook: dailyLook.id,
            })
                .getRawOne();
            return Object.assign(Object.assign({}, dailyLook), { imgUrl: this.awsService.getAwsS3FileUrl(dailyLook.imgUrl), likes, isUserLiked: !!Number(isLiked), isUserBookmarked: !!Number(isBookmarked) });
        }));
        return new pagination_dto_1.Pagination(total, pagination.getLimit(), pagination.page, items);
    }
    async getOne(idDailyLook, user) {
        const dailyLook = await this.dailyLookRepository
            .createQueryBuilder('dailyLook')
            .leftJoin('dailyLook.dailyLookTag', 'dailyLookTag')
            .leftJoin('dailyLook.user', 'user')
            .leftJoin('dailyLook.dailyLookComment', 'dailyLookComment')
            .leftJoin('dailyLookComment.user', 'dailyLookCommentUser')
            .addSelect(['dailyLookTag.id', 'dailyLookTag.name'])
            .addSelect(['user.id', 'user.nickname'])
            .addSelect([
            'dailyLookComment.createdAt',
            'dailyLookComment.id',
            'dailyLookComment.comment',
            'dailyLookCommentUser.id',
            'dailyLookCommentUser.name',
        ])
            .where('dailyLook.id = :idDailyLook', { idDailyLook })
            .getOneOrFail();
        const commentsWithIsMise = dailyLook.dailyLookComment.map((comment) => {
            comment.user.id === user.id
                ? (comment = Object.assign(Object.assign({}, comment), { isMine: true }))
                : (comment = Object.assign(Object.assign({}, comment), { isMine: false }));
            return comment;
        });
        dailyLook.dailyLookComment = commentsWithIsMise;
        return dailyLook;
    }
    async createTag(body) {
        const { name } = body;
        const isDuplicate = await this.dailyLookTagRepository.findOneBy({ name });
        if (isDuplicate) {
            throw new common_1.ConflictException();
        }
        this.dataSource.transaction(async (manager) => {
            const dailyLookTag = new dailyLookTag_entity_1.DailyLookTag();
            dailyLookTag.name = name;
            await manager.save(dailyLookTag);
        });
    }
    async getAllTag() {
        const dailyLookTags = await this.dailyLookTagRepository
            .createQueryBuilder('dailyLookTag')
            .select(['dailyLookTag.name'])
            .orderBy('dailyLookTag.name')
            .getMany();
        return { dailyLookTags };
    }
    async addLike(user, idDailyLook) {
        const dailyLook = await this.dailyLookRepository.findOneByOrFail({
            id: idDailyLook,
        });
        this.dataSource.transaction(async (manager) => {
            const userLikeDailyLook = new userLikeDailyLook_entity_1.UserLikeDailyLook();
            userLikeDailyLook.user = user;
            userLikeDailyLook.dailyLook = dailyLook;
            await manager.save(userLikeDailyLook);
        });
    }
    async removeLike(user, idDailyLook) {
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            await queryRunner.manager
                .createQueryBuilder()
                .delete()
                .from(userLikeDailyLook_entity_1.UserLikeDailyLook)
                .where('dailyLookId = :idDailyLook', { idDailyLook })
                .andWhere('userId = :idUser', { idUser: user.id })
                .execute();
            await queryRunner.commitTransaction();
        }
        catch (err) {
            await queryRunner.rollbackTransaction();
        }
        finally {
            await queryRunner.release();
        }
    }
    async bookmark(user, idDailyLook) {
        const dailyLook = await this.dailyLookRepository.findOneByOrFail({
            id: idDailyLook,
        });
        this.dataSource.transaction(async (manager) => {
            const userBookmarkDailyLook = new userBookmarkDailyLook_entity_1.UserBookmarkDailyLook();
            userBookmarkDailyLook.user = user;
            userBookmarkDailyLook.dailyLook = dailyLook;
            await manager.save(userBookmarkDailyLook);
        });
    }
    async removeBookmark(user, idDailyLook) {
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            await queryRunner.manager
                .createQueryBuilder()
                .delete()
                .from(userBookmarkDailyLook_entity_1.UserBookmarkDailyLook)
                .where('dailyLookId = :idDailyLook', { idDailyLook })
                .andWhere('userId = :idUser', { idUser: user.id })
                .execute();
            await queryRunner.commitTransaction();
        }
        catch (err) {
            await queryRunner.rollbackTransaction();
        }
        finally {
            await queryRunner.release();
        }
    }
    async createComment(user, idDailyLook, body) {
        const { comment } = body;
        const dailyLook = await this.dailyLookRepository.findOneByOrFail({
            id: idDailyLook,
        });
        this.dataSource.transaction(async (manager) => {
            const dailyLookComment = new dailyLookComment_entity_1.DailyLookComment();
            dailyLookComment.comment = comment;
            dailyLookComment.user = user;
            dailyLookComment.dailyLook = dailyLook;
            await manager.save(dailyLookComment);
        });
    }
    async updateComment(user, idDailyLookComment, body) {
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            const { comment } = body;
            const dailyLookComment = await this.dailyLookCommentRepository.findOneOrFail({
                where: {
                    id: idDailyLookComment,
                },
                relations: ['user'],
            });
            if (dailyLookComment.user.id !== user.id) {
                throw new common_1.ForbiddenException();
            }
            await queryRunner.manager
                .createQueryBuilder()
                .update(dailyLookComment_entity_1.DailyLookComment)
                .set({
                comment,
            })
                .where('id = :idDailyLookComment', { idDailyLookComment })
                .andWhere('user = :idUser', {
                idUser: user.id,
            })
                .execute();
            await queryRunner.commitTransaction();
        }
        catch (err) {
            await queryRunner.rollbackTransaction();
            throw new common_1.ForbiddenException();
        }
        finally {
            await queryRunner.release();
        }
    }
    async deleteComment(user, idDailyLookComment) {
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            const dailyLookComment = await this.dailyLookCommentRepository.findOneOrFail({
                where: {
                    id: idDailyLookComment,
                },
                relations: ['user'],
            });
            if (dailyLookComment.user.id !== user.id) {
                throw new common_1.ForbiddenException();
            }
            await queryRunner.manager
                .createQueryBuilder()
                .delete()
                .from(dailyLookComment_entity_1.DailyLookComment)
                .where('id = :idDailyLookComment', { idDailyLookComment })
                .andWhere('user = :idUser', {
                idUser: user.id,
            })
                .execute();
            await queryRunner.commitTransaction();
        }
        catch (err) {
            console.log(err);
            await queryRunner.rollbackTransaction();
            throw new common_1.ForbiddenException();
        }
        finally {
            await queryRunner.release();
        }
    }
};
DailyLookService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(dailyLook_entity_1.DailyLook)),
    __param(1, (0, typeorm_1.InjectRepository)(dailyLookTag_entity_1.DailyLookTag)),
    __param(2, (0, typeorm_1.InjectRepository)(userBookmarkDailyLook_entity_1.UserBookmarkDailyLook)),
    __param(3, (0, typeorm_1.InjectRepository)(userLikeDailyLook_entity_1.UserLikeDailyLook)),
    __param(4, (0, typeorm_1.InjectRepository)(dailyLookComment_entity_1.DailyLookComment)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        aws_service_1.AwsService,
        typeorm_2.DataSource])
], DailyLookService);
exports.DailyLookService = DailyLookService;
//# sourceMappingURL=daily-look.service.js.map
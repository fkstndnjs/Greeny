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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AwsService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const AWS = require("aws-sdk");
const path = require("path");
let AwsService = class AwsService {
    constructor(configService) {
        this.configService = configService;
        this.S3 = new AWS.S3({
            accessKeyId: this.configService.get('AWS_S3_ACCESS_KEY'),
            secretAccessKey: this.configService.get('AWS_S3_SECRET_KEY'),
            region: this.configService.get('AWS_S3_REGION'),
        });
        this.S3_BUCKET_NAME = this.configService.get('AWS_S3_BUCKET_NAME');
    }
    async uploadEventToS3(files) {
        try {
            let thumbnailKey;
            let mainThumbnailKey;
            const date = Date.now();
            thumbnailKey = `event/${date}/${path.basename(files.thumbnail[0].originalname)}`.replace(/ /g, '');
            await this.S3.putObject({
                Bucket: this.S3_BUCKET_NAME,
                Key: thumbnailKey,
                Body: files.thumbnail[0].buffer,
                ACL: 'public-read',
                ContentType: files.thumbnail[0].mimetype,
            }).promise();
            mainThumbnailKey = `event/${date}/main_${path.basename(files.mainThumbnail[0].originalname)}`.replace(/ /g, '');
            await this.S3.putObject({
                Bucket: this.S3_BUCKET_NAME,
                Key: mainThumbnailKey,
                Body: files.mainThumbnail[0].buffer,
                ACL: 'public-read',
                ContentType: files.mainThumbnail[0].mimetype,
            }).promise();
            return { thumbnailKey, mainThumbnailKey };
        }
        catch (error) {
            throw new common_1.BadRequestException(`File upload failed : ${error}`);
        }
    }
    async uploadFileToS3(folder, file) {
        try {
            const key = `${folder}/${Date.now()}_${path.basename(file.originalname)}`.replace(/ /g, '');
            const s3Object = await this.S3.putObject({
                Bucket: this.S3_BUCKET_NAME,
                Key: key,
                Body: file.buffer,
                ACL: 'public-read',
                ContentType: file.mimetype,
            }).promise();
            return key;
        }
        catch (error) {
            throw new common_1.BadRequestException(`File upload failed : ${error}`);
        }
    }
    async deleteS3Object(key) {
        try {
            await this.S3.deleteObject({
                Bucket: this.S3_BUCKET_NAME,
                Key: key,
            }).promise();
            return { success: true };
        }
        catch (error) {
            throw new common_1.BadRequestException(`Failed to delete file : ${error}`);
        }
    }
    getAwsS3FileUrl(objectKey) {
        return `https://${this.S3_BUCKET_NAME}.s3.amazonaws.com/${objectKey}`;
    }
};
AwsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], AwsService);
exports.AwsService = AwsService;
//# sourceMappingURL=aws.service.js.map
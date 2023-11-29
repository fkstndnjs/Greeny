import { ChallengeService } from './challenge.service';
import { User } from 'aws-sdk/clients/appstream';
import { PaginationDto } from 'src/common/dto/pagination.dto';
export declare class ChallengeController {
    private readonly challengeService;
    constructor(challengeService: ChallengeService);
    createChallenge(user: User): Promise<void>;
    getAllChallenge(user: User, pagination: PaginationDto): Promise<void>;
    getOneChallenge(user: User, idChallenge: number): Promise<void>;
    addLike(user: User, idChallenge: number): Promise<void>;
    removeLike(user: User, idChallenge: number): Promise<void>;
    bookmark(user: User, idChallenge: number): Promise<void>;
    removeBookmark(user: User, idChallenge: number): Promise<void>;
    createComment(user: User, idChallenge: number): Promise<void>;
    updateComment(user: User, idChallengeComment: number): Promise<void>;
    deleteComment(user: User, idChallengeComment: number): Promise<void>;
}

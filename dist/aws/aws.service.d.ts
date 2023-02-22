/// <reference types="multer" />
import { ConfigService } from '@nestjs/config';
export declare class AwsService {
    private readonly configService;
    private readonly S3;
    readonly S3_BUCKET_NAME: string;
    constructor(configService: ConfigService);
    uploadEventToS3(files: {
        thumbnail: Express.Multer.File[];
        mainThumbnail: Express.Multer.File[];
    }): Promise<{
        thumbnailKey: string;
        mainThumbnailKey: string;
    }>;
    uploadFileToS3(folder: string, file: Express.Multer.File): Promise<string>;
    deleteS3Object(key: string): Promise<{
        success: true;
    }>;
    getAwsS3FileUrl(objectKey: string): string;
}

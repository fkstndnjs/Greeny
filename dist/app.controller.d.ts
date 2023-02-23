/// <reference types="multer" />
import { AppService } from './app.service';
import { User } from './user/entities/user.entity';
import { AwsService } from './aws/aws.service';
export declare class AppController {
    private readonly appService;
    private readonly awsService;
    constructor(appService: AppService, awsService: AwsService);
    getHello(user: User): string;
    uploadImage(file: Express.Multer.File): Promise<string>;
    deleteFile(body: {
        key: string;
    }): Promise<{
        success: true;
    }>;
    getFile(body: {
        key: string;
    }): Promise<string>;
}

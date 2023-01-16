import { BadRequestException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as AWS from 'aws-sdk';
import * as path from 'path';
@Injectable()
export class AwsService {
  private readonly S3: AWS.S3;
  public readonly S3_BUCKET_NAME: string;

  constructor(private readonly configService: ConfigService) {
    this.S3 = new AWS.S3({
      accessKeyId: this.configService.get('AWS_S3_ACCESS_KEY'),
      secretAccessKey: this.configService.get('AWS_S3_SECRET_KEY'),
      region: this.configService.get('AWS_S3_REGION'),
    });
    this.S3_BUCKET_NAME = this.configService.get('AWS_S3_BUCKET_NAME');
  }

  async uploadEventToS3(files: {
    thumbnail: Express.Multer.File[];
    mainThumbnail: Express.Multer.File[];
  }) {
    try {
      let thumbnailKey: string;
      let mainThumbnailKey: string;
      const date = Date.now();

      thumbnailKey = `event/${date}/${path.basename(
        files.thumbnail[0].originalname,
      )}`.replace(/ /g, '');

      await this.S3.putObject({
        Bucket: this.S3_BUCKET_NAME,
        Key: thumbnailKey,
        Body: files.thumbnail[0].buffer,
        ACL: 'public-read',
        ContentType: files.thumbnail[0].mimetype,
      }).promise();

      mainThumbnailKey = `event/${date}/main_${path.basename(
        files.mainThumbnail[0].originalname,
      )}`.replace(/ /g, '');

      await this.S3.putObject({
        Bucket: this.S3_BUCKET_NAME,
        Key: mainThumbnailKey,
        Body: files.mainThumbnail[0].buffer,
        ACL: 'public-read',
        ContentType: files.mainThumbnail[0].mimetype,
      }).promise();

      return { thumbnailKey, mainThumbnailKey };
    } catch (error) {
      throw new BadRequestException(`File upload failed : ${error}`);
    }
  }

  async uploadFileToS3(folder: string, file: Express.Multer.File) {
    try {
      const key = `${folder}/${Date.now()}_${path.basename(
        file.originalname,
      )}`.replace(/ /g, '');

      const s3Object = await this.S3.putObject({
        Bucket: this.S3_BUCKET_NAME,
        Key: key,
        Body: file.buffer,
        ACL: 'public-read',
        ContentType: file.mimetype,
      }).promise();
      return { key, s3Object, contentType: file.mimetype };
    } catch (error) {
      throw new BadRequestException(`File upload failed : ${error}`);
    }
  }

  async deleteS3Object(key: string): Promise<{ success: true }> {
    try {
      await this.S3.deleteObject({
        Bucket: this.S3_BUCKET_NAME,
        Key: key,
      }).promise();
      return { success: true };
    } catch (error) {
      throw new BadRequestException(`Failed to delete file : ${error}`);
    }
  }

  public getAwsS3FileUrl(objectKey: string) {
    return `https://${this.S3_BUCKET_NAME}.s3.amazonaws.com/${objectKey}`;
  }
}

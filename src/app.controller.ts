import {
  Controller,
  Get,
  Post,
  Req,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';
import { JwtAuthGuard } from './auth/jwt/jwt.guard';
import { CurrentUser } from './common/decorator/currentUser';
import { User } from './user/entities/user.entity';
import { FileInterceptor } from '@nestjs/platform-express';
import { AwsService } from './aws/aws.service';

@ApiTags('app')
@UseGuards(JwtAuthGuard)
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly awsService: AwsService,
  ) {}

  @Get()
  getHello(@CurrentUser() user: User): string {
    return this.appService.getHello();
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadImage(@UploadedFile() file: Express.Multer.File) {
    return await this.awsService.uploadFileToS3('test', file);
  }
}

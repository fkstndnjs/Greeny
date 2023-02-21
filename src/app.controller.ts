import {
  Body,
  Controller,
  Get,
  Post,
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
import { Roles } from './common/decorator/roles';
import { RoleType } from './common/enum/RoleType';
import { RolesGuard } from './auth/role/role.guard';

@ApiTags('테스트ㄴ')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles(RoleType.ADMIN)
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

  @Post('delete')
  async deleteFile(@Body() body: { key: string }) {
    return this.awsService.deleteS3Object(body.key);
  }

  @Get('file')
  async getFile(@Body() body: { key: string }) {
    return this.awsService.getAwsS3FileUrl(body.key);
  }
}

import { ApiProperty, PickType } from '@nestjs/swagger';
import { DailyLook } from 'src/daily-look/entities/dailyLook.entity';

export class GetOneDailyLookResponseDto extends PickType(DailyLook, [
  'createdAt',
  'updatedAt',
  'id',
  'imgUrl',
  'title',
  'text',
]) {
  @ApiProperty({
    example: {
      id: '1',
      name: '실천인증',
    },
  })
  dailyLookTag: {
    id: '1';
    name: '실천인증';
  };

  @ApiProperty({
    example: {
      id: '1',
      nickname: '죠르디',
    },
  })
  user: {
    id: '1';
    nickname: '죠르디';
  };

  @ApiProperty({
    example: [
      {
        id: '1',
        createdAt: '2023-05-21T12:34:56Z',
        comment: '댓글 내용',
        isMine: true,
        user: {
          id: '1',
          name: '댓글 유저',
        },
      },
    ],
  })
  dailyLookComment: Array<{
    id: string;
    createdAt: Date;
    comment: string;
    isMine: boolean;
    user: {
      id: string;
      name: string;
    };
  }>;
}

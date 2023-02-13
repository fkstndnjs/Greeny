import { ApiProperty } from '@nestjs/swagger';

export class GetAllDailyLookResponseDto {
  @ApiProperty({
    example: '2023-02-08T07:00:16.117Z',
  })
  createdAt: string;

  @ApiProperty({
    example: '2023-02-13T00:10:25.724Z',
  })
  updatedAt: '2023-02-13T00:10:25.724Z';

  @ApiProperty({
    example: '1',
  })
  id: '1';

  @ApiProperty({
    example:
      'https://greeny2023.s3.amazonaws.com/dailyLook/1675839615841_스크린샷2023-02-06오전11.47.08.png',
  })
  imgUrl: 'https://greeny2023.s3.amazonaws.com/dailyLook/1675839615841_스크린샷2023-02-06오전11.47.08.png';

  @ApiProperty({
    example: '제목',
  })
  title: '제목';

  @ApiProperty({
    example: '본문',
  })
  text: '본문';

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
}

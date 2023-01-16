import { ApiProperty } from '@nestjs/swagger';

export class CreateEventDto {
  @ApiProperty({ description: '상태값', example: true })
  status: boolean;

  @ApiProperty({
    description: '참여방법',
    example: [
      {
        order: 1,
        text: '메뉴>챌린지>글쓰기 선택',
      },
      {
        order: 2,
        text: '이벤트 기간 동안 챌린지 게시글을 업로드하면 참여 완료!',
      },
    ],
  })
  eventWay: EventWayDto[];
}

class EventWayDto {
  order: number;

  text: string;
}

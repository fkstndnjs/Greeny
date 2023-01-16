import { ApiProperty } from '@nestjs/swagger';

export class CreateDto {
  @ApiProperty({
    description: 'body에 담길 데이터를 json string 으로 넘겨준다',
    example: `{  
        "status": true,
        "eventWay": [
            {
                "order": 1,
                "text": "text 1"
            },
            {
                "order": 2,
                "text": "text 2"
            }
        ]
    }`,
  })
  data: string;
}

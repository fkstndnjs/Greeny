import { applyDecorators, HttpStatus, Type } from '@nestjs/common';
import {
  ApiExtraModels,
  ApiOkResponse,
  ApiProperty,
  getSchemaPath,
} from '@nestjs/swagger';

export class SuccessResponse<T> {
  @ApiProperty({
    example: true,
    description: 'API 통신 성공 여부',
  })
  success: boolean;

  data: T;
}

export const ApiSuccessResponse = <ResponseDto extends Type<unknown>>({
  status = HttpStatus.OK,
  paginated = false,
  model,
}: {
  status?: HttpStatus;
  paginated?: boolean;
  model?: ResponseDto;
}) => {
  if (!model) {
    return applyDecorators(
      ApiOkResponse({
        status,
        content: {
          'application/json': {
            schema: {
              properties: {
                success: {
                  type: 'boolean',
                  example: true,
                  description: '전체 레코드 수',
                },
              },
            },
          },
        },
      }),
    );
  }
  return applyDecorators(
    ApiExtraModels(SuccessResponse, model),
    ApiOkResponse({
      schema: {
        allOf: [
          { $ref: getSchemaPath(SuccessResponse) },
          {
            properties: {
              data: paginated
                ? {
                    type: 'object',
                    properties: {
                      items: {
                        type: 'array',
                        items: {
                          $ref: getSchemaPath(model),
                        },
                      },
                      meta: {
                        type: 'object',
                        properties: {
                          page: {
                            type: 'number',
                            example: 1,
                            description: '현제 페이지',
                          },
                          size: {
                            type: 'number',
                            example: 10,
                            description: '조회 수',
                          },
                          total: {
                            type: 'number',
                            example: 100,
                            description: '전체 레코드 수',
                          },
                          pageCount: {
                            type: 'number',
                            example: 10,
                            description: '전체 페이지 수',
                          },
                          hasPreviousPage: {
                            type: 'number',
                            example: true,
                            description: '이전 페이지 여부',
                          },
                          hasNextPage: {
                            type: 'number',
                            example: false,
                            description: '다음 페이지여부',
                          },
                        },
                      },
                    },
                  }
                : {
                    $ref: getSchemaPath(model),
                  },
            },
          },
        ],
      },
    }),
  );
};

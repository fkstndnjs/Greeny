import { HttpStatus, Type } from '@nestjs/common';
export declare class SuccessResponse<T> {
    success: boolean;
    data: T;
}
export declare const ApiSuccessResponse: <ResponseDto extends Type<unknown>>({ status, paginated, model, }: {
    status?: HttpStatus;
    paginated?: boolean;
    model?: ResponseDto;
}) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;

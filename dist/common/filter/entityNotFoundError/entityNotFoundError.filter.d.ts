import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
import { EntityNotFoundError } from 'typeorm/error/EntityNotFoundError';
export declare class EntityNotFoundFilter implements ExceptionFilter {
    catch(exception: EntityNotFoundError, host: ArgumentsHost): void;
}

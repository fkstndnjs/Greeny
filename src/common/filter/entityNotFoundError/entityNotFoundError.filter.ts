import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { EntityNotFoundError } from 'typeorm/error/EntityNotFoundError';

@Catch(EntityNotFoundError)
export class EntityNotFoundFilter implements ExceptionFilter {
  catch(exception: EntityNotFoundError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const message = exception.message.replace(/\\/g, '').replace(/\n/g, '');

    console.log(message);

    response.status(404).json({
      success: false,
      error: {
        statusCode: 404,
        message,
        error: 'Entity Not Found',
      },
    });
  }
}

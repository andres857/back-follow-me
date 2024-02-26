import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    // const response = context.switchToHttp().getResponse();
    const request = context.switchToHttp().getRequest();
    const method = request.method;

    if (method === 'DELETE') {
      return next.handle().pipe(
        map(() => {
          return {
            statusCode: 204,
            message: 'Resource deleted',
            error: null,
          };
        }),
      );
    }

    return next.handle().pipe(
      map((data) => ({
        statusCode: context.switchToHttp().getResponse().statusCode,
        message: 'Success',
        data,
        error: null,
      })),
    );
  }
}

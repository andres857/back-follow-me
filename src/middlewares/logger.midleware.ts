import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Request...');
    next();
  }
}
export class LoggerMiddleware1 implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Request...1 1');
    next();
  }
}

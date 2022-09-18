import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    console.log({ env: process.env.ENV });
    return 'Hello World!';
  }
}

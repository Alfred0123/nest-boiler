import { Controller, Get, Inject, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('user')
export class UserController {
  constructor() {}

  @Get()
  async getUsers(@Req() request: Request) {
    return { message: 'success' };
  }
}

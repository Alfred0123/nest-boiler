import { Controller, Get, Inject, Req } from '@nestjs/common';
import { Request } from 'express';
import { GetUser } from '@/domain/user/interface/usecase.interface';

@Controller('user')
export class UserController {
  constructor(
    @Inject('GetUser')
    private readonly getUser: GetUser,
  ) {}

  @Get()
  async getUsers(@Req() request: Request) {
    await this.getUser.execute();
    return { message: 'success' };
  }
}

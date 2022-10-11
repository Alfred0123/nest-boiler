import { Module } from '@nestjs/common';
import { UserController } from '@/adapter/controller/user/user.controller';

@Module({
  imports: [],
  controllers: [UserController],
  // providers: [],
})
export class UserModule {}

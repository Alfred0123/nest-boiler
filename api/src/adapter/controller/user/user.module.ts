import { Module } from '@nestjs/common';
import { UserController } from '@/adapter/controller/user/user.controller';
import { UserModule as UserApplicationModule } from '@/application/user/user.module';

@Module({
  imports: [UserApplicationModule],
  controllers: [UserController],
  // providers: [],
})
export class UserModule {}

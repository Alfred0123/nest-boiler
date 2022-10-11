import { Module } from '@nestjs/common';
import { UserController } from '@/adapter/controller/user.controller';

@Module({
  imports: [],
  controllers: [UserController],
  // providers: [],
})
export class ControllerModule {}

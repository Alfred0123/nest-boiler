import { Module } from '@nestjs/common';
import { GetUserUsecase } from '@/application/user/get-user.usecase';

@Module({
  imports: [],
  // controllers: [],
  providers: [
    {
      provide: 'GetUser',
      useClass: GetUserUsecase,
    },
  ],
  exports: ['GetUser'],
})
export class UserModule {}

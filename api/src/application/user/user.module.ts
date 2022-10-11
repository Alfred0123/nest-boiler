import { Module } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { GetUserUsecase } from '@/application/user/get-user.usecase';
import { getDataSourceToken } from '@nestjs/typeorm';
import { createUserRepository } from '@/infrastructure/database/repository/user.repository';
import { UserRepository } from '@/domain/user/interface/repository.interface';

@Module({
  imports: [],
  providers: [
    {
      provide: 'UserRepository',
      useFactory: (dataSource: DataSource) => {
        return createUserRepository(dataSource);
      },
      inject: [getDataSourceToken('default')],
    },
    {
      provide: 'GetUser',
      useClass: GetUserUsecase,
    },
  ],
  exports: ['GetUser'],
})
export class UserModule {}

import { DataSource } from 'typeorm';
import User from '@/infrastructure/database/entity/user.entity';
import { UserRepository } from '@/domain/user/interface/repository.interface';

export const createUserRepository = (dataSource: DataSource) => {
  return dataSource.getRepository<UserRepository>(User).extend({
    // return dataSource.getRepository<UserRepository>(User).extend({
    // findByName(firstName: string, lastName: string) {
    //   return this.createQueryBuilder('user')
    //     .where('user.firstName = :firstName', { firstName })
    //     .andWhere('user.lastName = :lastName', { lastName })
    //     .getMany();
    // },
  });
};

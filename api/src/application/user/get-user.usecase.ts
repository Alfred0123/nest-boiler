import { Inject, Injectable } from '@nestjs/common';
import { GetUser } from '@/domain/user/interface/usecase.interface';
import { UserRepository } from '@/domain/user/interface/repository.interface';

@Injectable()
export class GetUserUsecase implements GetUser {
  constructor(
    @Inject('UserRepository')
    private readonly userRepository: UserRepository,
  ) {}

  public execute = async () => {
    console.log('getUserUsecase:execute');
    const result = await this.userRepository.find();
    console.log({ result });
  };
}

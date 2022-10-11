import { Injectable } from '@nestjs/common';
import { GetUser } from '@/domain/user/interface/usecase.interface';

@Injectable()
export class GetUserUsecase implements GetUser {
  constructor() {}

  public execute = async () => {
    console.log('getUserUsecase:execute');
  };
}

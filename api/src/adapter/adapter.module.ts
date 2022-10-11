import { Module } from '@nestjs/common';
import { UserModule } from '@/adapter/controller/user/user.module';

@Module({
  imports: [UserModule],
  // controllers: [],
  // providers: [],
})
export class AdapterModule {}

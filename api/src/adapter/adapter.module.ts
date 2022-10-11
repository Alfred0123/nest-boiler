import { Module } from '@nestjs/common';
import { ControllerModule } from '@/adapter/controller/controller.module';

@Module({
  imports: [ControllerModule],
  // controllers: [],
  // providers: [],
})
export class AdapterModule {}

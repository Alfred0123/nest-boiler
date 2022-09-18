import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CONFIG_TYPE } from '@/type/config/config.type';
import { DefaultConfig } from '@/interface/config/config.interface';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}

  getHello() {
    const config = this.configService.get<DefaultConfig>(CONFIG_TYPE.DEFAULT);
    return { message: 'pong', env: config.env, port: config.port };
  }
}

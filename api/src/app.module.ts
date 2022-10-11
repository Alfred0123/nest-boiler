import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { defaultConfig, databaseConfig } from '@/config/config.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseConfig } from '@/interface/config/config.interface';
import { AdapterModule } from '@/adapter/adapter.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [defaultConfig, databaseConfig],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const config = configService.get<DatabaseConfig>('database').default;
        return {
          migrationsRun: config.migrationsRun,
          logging: config.logging,
          synchronize: config.synchronize,
          type: config.type,
          host: config.host,
          port: config.port,
          username: config.username,
          password: config.password,
          database: config.database,
          autoLoadEntities: config.autoLoadEntities,
          // migrations: config.migrations,
          entities: config.entities,
        };
      },
    }),
    AdapterModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { DataSource, DataSourceOptions } from 'typeorm';
import User from './src/infrastructure/database/entity/user.entity';

export default new DataSource({
  name: 'common',
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'password',
  database: 'common',
  migrations: ['src/migration/*.ts'],
  entities: ['src/infrastructure/**/*.entity.ts'],
  // subscribers: ['infrastructure/database/subscribers/**/*.ts'],
  // migrationsRun: false,
});

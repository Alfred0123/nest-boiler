export interface DefaultConfig {
  env: string;
  port: number;
}

export interface DatabaseConfig {
  default: TypeormConfig;
}
export interface TypeormConfig {
  migrationsRun: boolean;
  logging: boolean;
  synchronize: boolean;
  type: 'postgres';
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
  autoLoadEntities: boolean;
  migrations: string[];
  entities: string[];
}

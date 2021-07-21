import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const connection = (config: ConfigService): TypeOrmModuleOptions => ({
  type: 'mysql',
  host: config.get('DB_HOST'),
  port: config.get('DB_PORT'),
  username: config.get('DB_USERNAME'),
  password: config.get('DB_PASSWORD'),
  database: config.get('DB_DATABASE'),
  entities: [config.get('DB_ENTITIES')],
  migrations: [config.get('DB_MIGRATION')],
  synchronize: config.get('DB_SYNCHRONIZE') === 'true',
  logging: config.get('DB_LOGGING') === 'true',
});

import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config();
export const config = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [__dirname + '/src/**/*.entity{.ts,.js}'],
  migrations: [__dirname + '/src/database/migrations/*{.ts,.js}'],
  logging: true,
  synchronize: false,
  migrationsTableName: 'typeorm_migrations',
  migrationsRun: false,
});

// npm run typeorm -- migration:run

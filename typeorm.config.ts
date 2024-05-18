import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from 'src/modules/user/entities/user';

const config: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [User],
  synchronize: true, // set to false in production
};

export default config;
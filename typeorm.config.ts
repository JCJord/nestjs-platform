import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from 'src/modules/user/entities/user';

const config: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'nestapp',
  port: 5432,
  username: 'postgres',
  password: 'Password@123',
  database: 'postgres',
  entities: [User],
  synchronize: true, // set to false in production
};

export default config;
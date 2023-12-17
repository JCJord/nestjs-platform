import { Module } from '@nestjs/common';
import { UserController } from './modules/user/controllers/user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './modules/user/entities/user';
import { UserService } from './modules/user/services/user.service';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Password@123',
      database: 'postgres',
      entities: [User],
      synchronize: true, // set to false in production
    }),
    UserModule,
  ],
})
export class AppModule {}

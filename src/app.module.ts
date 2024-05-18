import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './modules/user/entities/user';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      secret: 'secret-key',
      signOptions: { expiresIn: '24h' }
    }),
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
    AuthModule,
  ],
})
export class AppModule {}

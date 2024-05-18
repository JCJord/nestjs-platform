import { Module } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { UserRepository } from '../user/repository/user.repository';
import { AuthController } from './controllers/auth.controller';
import { UserModule } from '../user/user.module';
import { JwtService } from '@nestjs/jwt';

@Module({
    imports: [UserModule],
    controllers: [AuthController],
    providers: [AuthService, JwtService, UserRepository]
})
export class AuthModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user';
import { UserController } from './controllers/user.controller';
import { UserRepository } from './repository/user.repository';
import { UserService } from './services/user.service';

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    controllers: [UserController],
    providers: [UserService, UserRepository]
})
export class UserModule {}

import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from 'src/modules/user/services/user.service';
import { User } from '../entities/user';
import { UserDTO } from '../dtos/userDTO';
import { CreateUserDTO } from '../dtos/createUserDTO';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}
    
    @Post() // This decorator specifies that this method should handle GET requests
    async create(@Body() userData: CreateUserDTO): Promise<UserDTO> {
      return this.userService.createUser(userData);
    }
}

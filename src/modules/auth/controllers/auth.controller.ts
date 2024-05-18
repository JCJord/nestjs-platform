import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { CreateUserDTO } from 'src/modules/user/dtos/createUserDTO';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}
    
    @Post()
    async login(@Body() userData: CreateUserDTO): Promise<any>{
      this.authService.login(userData.email, userData.password);
    }
}

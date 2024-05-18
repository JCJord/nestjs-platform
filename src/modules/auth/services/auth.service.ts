import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from 'src/modules/user/repository/user.repository';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(UserRepository)
        private readonly userRepository: UserRepository,
        private readonly jwtService: JwtService
    ) {

    }

    async login(email: string, password: string): Promise<any> {
        const user = await this.userRepository.findOne({ where: { email } });
        if (!user) {
            throw new NotFoundException('User not found');
        }
        
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if(!isPasswordValid) throw new UnauthorizedException('Invalid credentials');
        
        const token  = this.generateToken(user.id, user.isAdmin);
        console.log(token)
        return token;
    }

    private generateToken(userId: number, isAdmin: boolean): string {
        const payload = {sub: userId, isAdmin};
        return this.jwtService.sign(payload, {secret: 'secret-key'});
    }
}

import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user';
import * as bcrypt from 'bcrypt';
import { UserRepository } from '../repository/user.repository';
import { CreateUserDTO } from '../dtos/createUserDTO';
import { UserDTO } from '../dtos/userDTO';

@Injectable()
export class UserService {
    constructor(
      @InjectRepository(UserRepository)
      private readonly userRepository: UserRepository
    ) {}
        
    async createUser(data: CreateUserDTO): Promise<User> {
      const { firstName, lastName, email, password } = data;
      
      const existingUser = await this.userRepository.findOne({where: { email }});

      if(existingUser) throw new ConflictException('Email is already registered');
      const hashedPassword = await bcrypt.hash(password,  10);

      const user = this.userRepository.create({
        firstName,
        lastName,
        email,
        password: hashedPassword,
        isAdmin: false
      });

      return this.userRepository.save(user);
    }

    async findAll(): Promise<UserDTO[]> {
      return this.userRepository.find();
    }
}

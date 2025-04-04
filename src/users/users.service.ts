import { Injectable, BadRequestException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { CreationAttributes } from 'sequelize';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User) private userModel: typeof User,
    private jwtService: JwtService,
  ) {}

  // 🛠️ Register User
  async register(email: string, password: string) {
    const existingUser = await this.userModel.findOne({ where: { email } });
    if (existingUser) {
      throw new BadRequestException('Email is already in use');
    }
  
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // ✅ Fix: Explicitly define the type as 'CreationAttributes<User>'
    const user = await this.userModel.create<User>({
      email,
      password: hashedPassword,
    } as CreationAttributes<User>); // ✅ Explicitly use CreationAttributes<User>
  
    return { message: 'User registered successfully', userId: user.id };
  }
  

  // 🔐 Login User
  async login(email: string, password: string) {
    console.log('Login method called'); // Debug log
  
    const user = await this.userModel.findOne({
      where: { email },
      attributes: ['id', 'email', 'password'], // Explicitly include the password field
    });
  
    if (!user) {
      console.log('User not found'); // Debug log
      throw new UnauthorizedException('Invalid email or password');
    }
  
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      console.log('Invalid password'); // Debug log
      throw new UnauthorizedException('Invalid email or password');
    }
  
    // Generate JWT Token
    const token = this.jwtService.sign({ id: user.id, email: user.email });
    console.log('Token generated:', token); // Debug log
  
    return { message: 'Login successful', token }; // Return the response
  }
}
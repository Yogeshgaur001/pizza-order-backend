import { Controller, Post, Body, Res } from '@nestjs/common';
import { UsersService } from './users.service';
import { Response } from 'express';

@Controller('auth')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  async register(@Body('email') email: string, @Body('password') password: string) {
    return this.usersService.register(email, password);
  }

  @Post('login')
  async login(
    @Body('email') email: string,
    @Body('password') password: string,
  ) {
    console.log('Login endpoint called'); // Debug log
    return this.usersService.login(email, password); // Let NestJS handle the response
  }

  @Post('logout')
  async logout(@Res() res: Response) {
    // Perform logout logic, e.g., invalidate tokens or clear cookies
    res.clearCookie('authToken'); // Example: Clear auth token cookie
    return res.json({ message: 'Logout successful' });
  }
}

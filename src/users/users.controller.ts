import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post('register')
  register(@Body() body) {
    return this.userService.register(body.name, body.email, body.password);
  }

  @Post('login')
  login(@Body() body) {
    return this.userService.login(body.email, body.password);
  }
}
import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('register')
  async register(@Body('email') email: string, @Body('password') password: string) {
    return this.usersService.create(email, password);
  }
}

import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UserService) {}

  @Post('register')
  async register(@Body() data: { email: string; password: string; name?: string }) {

    return this.usersService.createUser(data);
  }
}

import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './users.service';
//controlador de usuario
@Controller('users')
export class UsersController {
  //crea objeto de servicio
  constructor(private usersService: UserService) {}
  
  //ante la solicitud de /users/register solicitud HTTP: Post
  //responde envíando data del usuario, y llamando al servicio de usuario
  //delegando en el la solicitud de creación de usuario
  @Post('register')
  async register(@Body() data: { email: string; password: string; name?: string }) {

    return this.usersService.createUser(data);
  }
}

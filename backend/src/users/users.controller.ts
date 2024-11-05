import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './users.service';
//controlador de usuario
@Controller('users')
export class UsersController {
  //crea objeto de servicio
  constructor(private usersService: UserService) {}
  
}

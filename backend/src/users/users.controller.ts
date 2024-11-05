import { Controller, Param, Put, Get, Body } from '@nestjs/common';
import { UserService } from './users.service';
//controlador de usuario
@Controller('users')
export class UsersController {
  //crea objeto de servicio
  constructor(private usersService: UserService) {}

  //recibe un http solicitud de put con un id correspondiente y genera el cambio de datos solicitados.
  //llama al servicio de usuario para realizar la tarea
  @Put(':id')
  async updateUser(
    @Param('id') id: string,
    @Body() data: { usuario?: string; rol?: string; password?: string },
  ) {
    const userId = parseInt(id, 10);
    return this.usersService.updateUser(userId, data);
  }
  //mediante el get de all permite visualizar todos los usuarios
  @Get("all")
  async showUsers(){
    return this.usersService.showUsers();
  }
}

import { Controller, Param, Put, Post, Delete, Get, Body } from '@nestjs/common';
import { UserService } from './users.service';
import {CreateUserDto} from './dto/create-user.dto';
import {UpdateUserDto} from './dto/update-user.dto';
//controlador de usuario
@Controller('users')
export class UsersController {
  //crea objeto de servicio
  constructor(private usersService: UserService) {}

  @Post('/create')
  async create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);  // Llama al servicio para crear el usuario
  }

  @Delete('/delete/:id')
  async remove(@Param('id') id: string) {
    return this.usersService.removeUser(+id);  // Llama al servicio para eliminar el usuario
  }



  //recibe un http solicitud de put con un id correspondiente y genera el cambio de datos solicitados.
  //llama al servicio de usuario para realizar la tarea
  @Put(':id')
  async updateUser(
    @Param('id') id: string,
    @Body() data: UpdateUserDto,
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

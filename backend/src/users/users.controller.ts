import { Controller, Param, Post, Patch, Delete, Get, Body } from '@nestjs/common';
import { UserService } from './users.service';
import {CreateUserDto} from './dto/create-user.dto';
import {UpdateUserDto} from './dto/update-user.dto';
import { AuthService } from '../auth/auth.service';
//controlador de usuario
@Controller('users')
export class UsersController {
  //crea objeto de servicio
  constructor(
    private readonly usersService: UserService,
    private readonly authService: AuthService // Inyecta AuthService
  ) {}


   // Llama al servicio para crear el usuario le envía los datos necesarios
  @Post('/create')
  async create(@Body() createUserDto: CreateUserDto) {
    const hashedPassword = await this.authService.hashPassword(createUserDto.password);
    const userWithHashedPassword = { ...createUserDto, password: hashedPassword };
    return this.usersService.createUser(userWithHashedPassword);
  }


  // Llama al servicio para eliminar el usuario, le envía un id para realizar la búsqueda y eliminarlo.
  @Delete('/delete/:id')
  async remove(@Param('id') id: string) {
    return this.usersService.removeUser(+id);  
  }



  //recibe un http solicitud de patch con un id correspondiente y genera el cambio de datos solicitados.
  //llama al servicio de usuario para realizar la tarea
  @Patch(':id')
  async updateUser(
    @Param('id') id: string,
    @Body() data: UpdateUserDto,
  ) {
    const userId = parseInt(id, 10);
    return this.usersService.updateUser(userId, data);
  }


  //mediante el get de all permite visualizar todos los usuarios en la base de datos
  @Get("all")
  async showUsers(){
    return this.usersService.showUsers();
  }

}

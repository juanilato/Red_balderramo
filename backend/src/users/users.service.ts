import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import {UpdateUserDto} from './dto/update-user.dto';
import {CreateUserDto} from './dto/create-user.dto';


//servicio de usuario
@Injectable()
export class UserService {
  
  //crea un objeto de prisma para manejar la base de datos 
  constructor(private prisma: PrismaService) {}


  //crea usuario (usuario, rol, contraseña)
  async createUser(data: CreateUserDto) {
    return this.prisma.user.create(
      { data }
    );
  }


  //elimina usuario (error debe eliminar su contenedor)
  async removeUser(id: number) {
    return this.prisma.user.deleteMany({
      where: { id },  
    });
  }

  //recibe un usuario y devuelve todos los datos del mismo
  async getUserByUserName(usuario: string) {
    return this.prisma.user.findUnique({ where: 
      { usuario } 
    });
  }


  // actualiza información del usuario, usando prisma update.
  // puede o no recibir valores, el valor que reciba lo cambiara, el que no lo dejara igual
  async updateUser(id: number, data: UpdateUserDto) {
  
    if (data.password) {
      data.password = await bcrypt.hash(data.password, 10);
    }
    return this.prisma.user.update({
      where: { id },
      data,
    });
  }



  // muestra todos los usuarios usando prisma

  async showUsers(){
    return this.prisma.user.findMany({
      include:{
        forms: true, 
      }
    });
  }

  
}



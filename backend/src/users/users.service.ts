import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import {UpdateUserDto} from './dto/update-user.dto';
import {CreateUserDto} from './dto/create-user.dto';

import {CreateFormDto} from '../forms/dto/create-form.dto';
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
  async removeUser(id: number) {
    return this.prisma.user.delete({
      where: { id },  // Elimina el usuario por su ID
    });
  }

  //recibe un usuario y devuelve al usuario entero de el mismo
  async getUserByEmail(usuario: string) {
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



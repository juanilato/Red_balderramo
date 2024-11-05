import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

//servicio de usuario
@Injectable()
export class UserService {
  //crea un objeto de prisma para manejar la base de datos 
  constructor(private prisma: PrismaService) {}
  //crea usuario (usuario, rol, contraseña)
  async createUser(data: { usuario: string; rol: string; password: string }) {
    return this.prisma.user.create({ data });
  }
  //recibe un usuario y devuelve al usuario entero de el mismo
  async getUserByEmail(usuario: string) {
    return this.prisma.user.findUnique({ where: { usuario } });
  }
}



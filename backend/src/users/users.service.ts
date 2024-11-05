import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

//servicio de usuario
@Injectable()
export class UserService {
  //crea un objeto de prisma para manejar la base de datos 
  constructor(private prisma: PrismaService) {}
  //crea usuario (email, contraseña, nombre (opcional))
  async createUser(data: { email: string; password: string; name?: string }) {
    return this.prisma.user.create({ data });
  }
  //recibe un email y devuelve al usuario único del mismo email
  async getUserByEmail(email: string) {
    return this.prisma.user.findUnique({ where: { email } });
  }
}



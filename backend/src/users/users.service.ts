  import { Injectable } from '@nestjs/common';
  import { PrismaService } from '../../prisma/prisma.service';
  import * as bcrypt from 'bcrypt';

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
    // actualiza información del usuario, usando prisma update.
    // puede o no recibir valores, el valor que reciba lo cambiara, el que no lo dejara igual
    async updateUser(id: number, data: { usuario?: string; rol?: string; password?: string }) {
    
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
        select:{
          usuario: true,
          rol: true
        }
      });
    }

    async authenticateUser(usuario: string, password: string) {
      const user = await this.prisma.user.findUnique({
        where: { usuario },
      });
  
      if (!user) {
        throw new UnauthorizedException('Usuario no encontrado');
      }
  
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        throw new UnauthorizedException('Contraseña incorrecta');
      }
  
      // Aquí puedes devolver solo el usuario sin la contraseña
      const { password: _, ...userWithoutPassword } = user;
      return userWithoutPassword;
    }
  }



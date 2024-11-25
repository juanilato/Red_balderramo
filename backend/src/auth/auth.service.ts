import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
//servicio de autenticación
@Injectable()
export class AuthService {
  //crea objeto de servicio de usuario
  constructor(private userService: UserService, private jwtService: JwtService) {}


  //se solicita un registro del usuario, envía los datos al servicio de usuario 
  //con contraseña hasheada.

  async register(data: { usuario: string; rol: string; password: string }) {
    
    const hashedPassword = await bcrypt.hash(data.password, 10);
    return this.userService.createUser({
      ...data,
      password: hashedPassword,
    });
  }

  //Se valida el usuario (login), se realiza búsqueda de usuario en el servicio de usuario,
  //así como también la comparación de la contraseña (hashed) con la contraseña del usuario, 
  //dado ambos datos correctos, se retornara el usuario, caso contrario lanza error, "invalid credentials"
  async validateUser(usuario: string, password: string) {
    const user = await this.userService.getUserByUserName(usuario);
    if (user && (await bcrypt.compare(password, user.password))) {
      const { password, ...result } = user;
      return result;
    }
    throw new UnauthorizedException('Invalid credentials');
  }
  

  async hashPassword(password: string): Promise<string> {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
  }

  generateJwt(user: any): string {
    const payload = { sub: user.id, username: user.usuario };
    return this.jwtService.sign(payload);
  }
}

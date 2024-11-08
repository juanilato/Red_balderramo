import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

//servicio de autenticación
@Injectable()
export class AuthService {
  //crea objeto de servicio de usuario
  constructor(
    private userService: UserService,
    private jwtService: JwtService)
    {}

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
  
  //Resive la contraseña y la codifica y luego la devuelve
  async hashPassword(password: string): Promise<string> {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
  }

  // Genera un token JWT para el inicio de sesion
  async generateJwt(datos: any): Promise<string> {
    const payload = { usuario: datos.usuario, rol: datos.rol };
    return this.jwtService.sign(payload);
  }

  // Método para verificar el JWT y obtener la información del usuario
  async verifyJwt(token: string) {
    try {
      const decoded = this.jwtService.verify(token);
      return decoded; // Devuelve el payload del JWT (usuario, rol, etc.)
    } catch (e) {
      throw new UnauthorizedException('Invalid or expired token');
    }
  }

  

}

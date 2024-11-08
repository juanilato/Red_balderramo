import { Controller, Post, Body, UnauthorizedException,Res, Get,Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { Response } from 'express';


// controlador del auth
@Controller('auth')
export class AuthController {
  //crea el objeto de servicio
  constructor(private authService: AuthService) {}
  //registra un usuario, mediante el uso del auth service pasandole todos los datos dados 
  @Post('register')
  async register(@Body() data: CreateAuthDto) {
    return this.authService.register(data);
  }

  // se genera el login de usuario, envio de datos, caso que auth service responda que existe usuario devuelve usuario,
  //crea un token JWT y lo envia al cliente como una cookie para guardarlo como las paginas por rol,
  // caso contrario retorna error "invalid credentials"
  @Post('login')
  async login(@Body() data: UpdateAuthDto, @Res() res: Response) {
    const user = await this.authService.validateUser(data.usuario, data.password);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // Si el usuario es válido, generamos el token
    const token = await this.authService.generateJwt(user);

    // Establecemos el token en una cookie HTTP-only
    res.cookie('auth-token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // Solo true en producción
      maxAge: 24 * 60 * 60 * 1000, // Expira en 1 día
      sameSite: 'strict', // Solo envía en solicitudes de mismo sitio
    });

    // Devuelve una respuesta de éxito
    return res.json({ success: true, message: 'Login exitoso' });
  }

  @Get('verify')
  async verifyUser(@Req() request: any) {
    const token = request.cookies['token'] || request.headers['authorization'];
    if (!token) {
      throw new UnauthorizedException('Token not provided');
    }
    
    const userData = await this.authService.verifyJwt(token);
    return userData; // Devuelve los datos del usuario (rol, etc.)
  }
  


}





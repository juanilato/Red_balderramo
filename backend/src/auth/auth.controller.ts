import { Controller, Post, Body, Res, UnauthorizedException } from '@nestjs/common';
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
  // caso contrario retorna error "invalid credentials"
  @Post('login')
  async login(@Body() data: UpdateAuthDto, @Res({ passthrough: true }) res: Response) {
    // Validar credenciales del usuario
    const user = await this.authService.validateUser(data.usuario, data.password);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // Generar el token JWT
    const token = this.authService.generateJwt(user);

    // Configurar la cookie con el JWT
    res.cookie('auth_token', token, {
      httpOnly: true, // Solo accesible por el servidor
      secure: process.env.NODE_ENV === 'production', // Solo en HTTPS en producción
      sameSite: 'strict', // Previene ataques CSRF
      maxAge: 3600000, // Tiempo de vida en milisegundos (1 hora en este caso)
    });

    // Retornar una respuesta opcional
    return { 
      message: 'Login successful',
      
      token: token, // Devolver el token JWT 
      
      user: user,   // Devolver el usuario sin la contraseña 
  };
}
}

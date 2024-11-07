import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
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
  async login(@Body() data: UpdateAuthDto) {
    const user = await this.authService.validateUser(data.usuario, data.password);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return user;
  }
}

import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt'
import { AuthController } from './auth.controller';
import { UserModule } from '../users/users.module'; 
// módulo del auth usa (servicio de autenticacion, controlador de autenticación y módulo de usuario)
@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET || '12345',
      signOptions: { expiresIn: '1h' }, // Configura el tiempo de expiración
    }),
    UserModule,
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}

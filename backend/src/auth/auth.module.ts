import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy'; 
@Module({
  imports: [
    UserModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET || '1234', // Usa un valor seguro en producción
      signOptions: { expiresIn: '1d' }, // Configura la expiración del token
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy], // Asegúrate de incluir JwtStrategy si estás usando una estrategia JWT
  exports: [AuthService], // Exporta AuthService si se necesita en otros módulos
})
export class AuthModule {}

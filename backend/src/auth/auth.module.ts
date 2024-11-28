import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt'
import { AuthController } from './auth.controller';
import { UserModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import {JwtStrategy} from './strategies/jwt.strategies'



// módulo del auth usa (servicio de autenticacion, controlador de autenticación y módulo de usuario)
@Module({
  imports: [
    // Configuración de Passport.js con estrategia por defecto 'jwt'
    PassportModule.register({defaultStrategy: 'jwt'}),
    // Configuración del módulo JWT para generación y validación de tokens
    JwtModule.register({
      secret:   '12345', //clave secreta, debe coincidir con la de JwtStrategy
      signOptions: { expiresIn: '1h' }, 
    }),
    UserModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy], // Estrategia para validar JWT en las solicitudes (JwtStrategy)
  exports: [PassportModule], // Exporta la configuración de Passport para que otros módulos puedan usarla
})
export class AuthModule {}

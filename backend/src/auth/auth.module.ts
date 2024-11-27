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
    PassportModule.register({defaultStrategy: 'jwt'}),
    JwtModule.register({
      secret:   '12345',
      signOptions: { expiresIn: '1h' }, 
    }),
    UserModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [PassportModule],
})
export class AuthModule {}

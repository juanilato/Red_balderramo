import { Module } from '@nestjs/common';
import { UserService } from './users.service';
import {UsersController} from './users.controller'
import { PrismaModule } from '../../prisma/prisma.module';
import { AuthService } from 'src/auth/auth.service';
import { JwtModule } from '@nestjs/jwt';

//módulo de usuario utiliza (módulo de prisma, y servicios de usuario)
@Module({
  imports: [
    PrismaModule,
    JwtModule.register({ secret: 'your-secret-key', signOptions: { expiresIn: '60m' } })
  ],
  providers: [UserService,AuthService],
  controllers: [UsersController],
  exports: [UserService],
})
export class UserModule {}

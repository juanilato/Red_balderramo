import { Module } from '@nestjs/common';
import { UserService } from './users.service';
import {UsersController} from './users.controller'
import { PrismaModule } from '../../prisma/prisma.module';
import { AuthService } from 'src/auth/auth.service';


//módulo de usuario utiliza (módulo de prisma, y servicios de usuario)
@Module({
  imports: [PrismaModule],
  providers: [UserService,AuthService],
  controllers: [UsersController],
  exports: [UserService],
})
export class UserModule {}

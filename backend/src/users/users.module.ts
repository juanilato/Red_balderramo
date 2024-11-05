import { Module } from '@nestjs/common';
import { UserService } from './users.service';
import { PrismaModule } from '../../prisma/prisma.module';
//módulo de usuario utiliza (módulo de prisma, y servicios de usuario)
@Module({
  imports: [PrismaModule],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}

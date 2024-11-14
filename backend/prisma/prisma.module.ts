import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

//usa el servicio de prisma y lo exporta para que se use en distintas funciones (login, register, etc).
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}

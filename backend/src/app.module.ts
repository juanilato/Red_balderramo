import { Module } from '@nestjs/common';
import { UserModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from '../prisma/prisma.module';

//módulo de la app utiliza el módulo de (usuario, autorización y prisma)
@Module({
  imports: [UserModule, AuthModule, PrismaModule],
})
export class AppModule {}

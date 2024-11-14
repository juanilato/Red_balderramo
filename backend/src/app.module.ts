import { Module } from '@nestjs/common';
import { UserModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from '../prisma/prisma.module';
import { FormsModule } from './forms/forms.module';
import { NotificationsModule } from './notifications/notifications.module';
import { UpdateGateway } from './update.gateway';

//módulo de la app utiliza el módulo de (usuario, autorización, formulario y prisma)
@Module({
  imports: [PrismaModule, UserModule, AuthModule,  FormsModule, NotificationsModule ],
  providers: [UpdateGateway],
})
export class AppModule {}

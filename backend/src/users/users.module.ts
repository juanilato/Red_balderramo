import { Module, forwardRef } from '@nestjs/common';
import { UserService } from './users.service';
import {UsersController} from './users.controller'
import { PrismaModule } from '../../prisma/prisma.module';
import { NotificationsModule } from '../notifications/notifications.module'



//módulo de usuario utiliza (módulo de prisma, y servicios de usuario)
@Module({
  imports: [PrismaModule, forwardRef(() => NotificationsModule)],
  providers: [UserService],
  controllers: [UsersController],
  exports: [UserService],
})
export class UserModule {}

import { Module, forwardRef } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { NotificationsController } from './notifications.controller';
import { PrismaModule } from '../../prisma/prisma.module';
import { UserModule } from '../users/users.module';
import {UpdateGateway} from '../update.gateway';

@Module({
  imports: [forwardRef(() => UserModule), PrismaModule],
  controllers: [NotificationsController],
  providers: [NotificationsService, UpdateGateway],
})
export class NotificationsModule {}

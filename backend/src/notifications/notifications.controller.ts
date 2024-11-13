// notifications.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { NotificationsService } from './notifications.service';

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Post('send-to-all')
  async sendNotificationToAll(@Body() notificationData: { userId: number; message: string }) {
    return this.notificationsService.sendToAll(notificationData);
  }
}

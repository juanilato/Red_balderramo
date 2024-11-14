// notifications.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { UpdateGateway } from '../update.gateway';

@Injectable()
export class NotificationsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly updateGateway: UpdateGateway,
  ) {}

  async sendToAll({ userId, message }: { userId: number; message: string }) {
    // Verifica que el usuario sea un "jefe"
    const sender = await this.prisma.user.findUnique({ where: { id: userId } });
    if (sender?.rol !== 'jefe') throw new Error('Solo los jefes pueden enviar notificaciones globales');

    // Obtiene todos los usuarios que no son "jefes"
    const recipients = await this.prisma.user.findMany({
      where: { rol: { not: 'jefe' } },
    });




    // Envia la notificación a través del Gateway de WebSocket
    recipients.forEach((recipient) => {
      this.updateGateway.sendNotificationToUser(recipient.id, message);
    });

    return { success: true, message: 'Notificación enviada a todos los roles' };
  }
}

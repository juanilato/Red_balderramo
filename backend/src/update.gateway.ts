// src/update.gateway.ts
import {
    WebSocketGateway,
    WebSocketServer,
    SubscribeMessage,
    OnGatewayConnection,
    OnGatewayDisconnect,
  } from '@nestjs/websockets';
  import { Server, Socket } from 'socket.io';
  
  @WebSocketGateway({
    cors: {
      origin: 'http://localhost:3000',
      methods: ['GET', 'POST'],
      credentials: true,
    },
  })
  export class UpdateGateway implements OnGatewayConnection, OnGatewayDisconnect {
    
    @WebSocketServer()
    server!: Server;
  
    private activeUsers = new Map<number, string>(); 

    getActiveUsers(): Map<number, string> {
      return this.activeUsers;
    }

    getSocketId(userId: number): string | undefined {
      return this.activeUsers.get(userId); 
    }
    printActiveUsers(): void {
      this.getActiveUsers().forEach((value, key) => {
        console.log(`User ID: ${key}, Username: ${value}`);
      });
    }
    
 

    // Método llamado cuando un usuario se conecta
    handleConnection(client: Socket) {
      const userIdQuery = client.handshake.query.userId;
      const userId = userIdQuery && !Array.isArray(userIdQuery)
        ? parseInt(userIdQuery, 10)
        : NaN;
        
      if (userId) {
        this.activeUsers.set(userId, client.id);
        console.log(`Usuario conectado ${userId}, socket: ${client.id}`);
      }
    }
  
    // Método llamado cuando un usuario se desconecta
    handleDisconnect(client: Socket) {
      const userId = [...this.activeUsers.entries()].find(
        ([, socketId]) => socketId === client.id,
      )?.[0];
      if (userId) {
        this.activeUsers.delete(userId);
      }
    }
  
    // Método para enviar una notificación específica a un usuario por su ID
    sendNotificationToUser(userId: number, message: string) {
    
      const clientSocketId = this.activeUsers.get(userId);
      this.printActiveUsers();
      if (clientSocketId) {
        this.server.to(clientSocketId).emit('newNotification', { message });
      } else {
        console.log(`No se encontró un socket para el usuario ${userId}`);
      }
    }
  
    // Método para enviar una notificación a todos los usuarios
    broadcastNotification(message: string) {
      this.server.emit('newNotification', { message });
    }
    
  }
  
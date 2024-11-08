import cookieParser = require('cookie-parser');
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// Aplicación que runea en el puerto local 4000
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser());
  app.enableCors({
    origin: 'http://localhost:3000', // Dominio del frontend
    credentials: true, // Permitir el uso de cookies en las solicitudes
  });
  await app.listen(4000);
}
bootstrap();

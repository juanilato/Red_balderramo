import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// Aplicación que runea en el puerto local 4000
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(4000);
}
bootstrap();

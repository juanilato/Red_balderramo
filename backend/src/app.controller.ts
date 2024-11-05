import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

//no usado por ahora, módulo de la app
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

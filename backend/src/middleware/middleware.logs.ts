import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

// El middleware se encarga de registrar los detalles de cada solicitud
@Injectable()
export class MiddlewareLogs implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    // Registrar detalles de la solicitud
    console.log(`Request Method: ${req.method}`); // Método de la solicitud (GET, POST, etc.)
    console.log(`Request URL: ${req.originalUrl}`); // URL de la solicitud
    console.log(`Request Time: ${new Date().toISOString()}`); // Fecha y hora de la solicitud

    next(); // Permite que la solicitud pase al siguiente middleware o al controlador
  }
}

import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class SecurityMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    try {
      // Obtener el encabezado de autorización
      const authHeader = req.headers['authorization'];

      // Si el encabezado no está presente o no es válido
      if (!authHeader || !authHeader.startsWith('Bearer ')) {
        throw new UnauthorizedException('Token no proporcionado o inválido');
      }

      // Llamar a next() para pasar al siguiente middleware o controlador
      next();
    } catch (error) {
      // Si el error es desconocido, lo manejamos de manera genérica
      if (error instanceof UnauthorizedException) {
        // Si el error es una UnauthorizedException, lo manejamos como una excepción de autorización
        console.error('Error de autorización:', error.message);
        res.status(401).json({ message: error.message });
      } else {
        // En caso de error desconocido, lo manejamos de manera genérica
        console.error('Error desconocido:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
      }
    }
  }
}

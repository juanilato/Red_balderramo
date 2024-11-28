import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
// se inyecta en otras partes de código para validar el token y permitir la solicitud de datos através del mismo
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}  // Extiende el AuthGuard con la estrategia 'jwt'

import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // Extrae el token del encabezado Authorization: Bearer <token>
      ignoreExpiration: false, // Rechaza tokens expirados
      secretOrKey: '12345', // Clave secreta usada para verificar la firma del token
    });
  }

  /**
   * Este método valida el payload decodificado del JWT.
   * El objeto devuelto será asignado a `request.user`.
   */
  async validate(payload: any) {

    return { id: payload.id, usuario: payload.usuario, rol: payload.rol }; 
  }
}

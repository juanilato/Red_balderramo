import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // Extrae el token (frontend)
      ignoreExpiration: false, // Rechaza tokens expirados 
      secretOrKey: '12345', // Clave secreta usada para verificar la firma del token
    });
  }


  //Este método valida el payload decodificado del JWT.

  async validate(payload: any) {
  // Retorna un objeto con los datos esenciales del usuario, extraídos del payload.
  // Esto permite que las rutas protegidas accedan a la información del usuario
  // autenticado a través del objeto `request.user`.
    return { id: payload.id, usuario: payload.usuario, rol: payload.rol }; 
  }
}

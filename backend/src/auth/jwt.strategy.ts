import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Request } from 'express';
import { JwtPayload } from './interface/jwt-payload.interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromExtractors([(request: Request) => {
            return request?.cookies?.['auth-token']; // Extrae el token de la cookie 'auth-token'
        }]),
    ignoreExpiration: false,
    secretOrKey: process.env.JWT_SECRET || 1234,
    });
    }

    async validate(datos: JwtPayload) {
        return { usuario: datos.usuario, role: datos.rol };
    }
}

import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    // Obtén los roles requeridos desde los metadatos
    const requiredRoles = this.reflector.get<string[]>('roles', context.getHandler());
    
    if (!requiredRoles) {
      return true; // Si no hay roles definidos, permite el acceso
    }

    // Obtén el usuario desde la request
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    
    
    console.log(user)

    if (!user) {
      throw new ForbiddenException('Usuario no autenticado');
    }

    // Verifica si el usuario tiene al menos uno de los roles requeridos
    const hasRole = requiredRoles.some((role) => user.rol === role);
    if (!hasRole) {
      throw new ForbiddenException('No posees el rol requerido');
    }

    return true; // Permite el acceso si tiene el rol requerido
  }
}

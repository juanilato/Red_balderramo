import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common'; 
import { Reflector } from '@nestjs/core'; // Reflector se usa para acceder a los metadatos de las rutas

@Injectable()
export class RolesGuard implements CanActivate {
  
  
  constructor(private reflector: Reflector) {}

  // Implementa el método canActivate, que determina si el acceso a la ruta es permitido
  canActivate(context: ExecutionContext): boolean {
    // Obtiene los roles requeridos para la ruta desde los metadatos (decorador Roles en ./decorator/roles.decorator.ts)
    const requiredRoles = this.reflector.get<string[]>('roles', context.getHandler());
    
    // Si no hay roles requeridos definidos, permite el acceso sin restricciones
    if (!requiredRoles) {
      return true;
    }
    // Obtiene la solicitud HTTP y extrae la información del usuario desde request.user
    const request = context.switchToHttp().getRequest();
    const user = request.user;

    // Si no se encuentra el usuario en la solicitud, lanza un error de acceso prohibido
    if (!user) {
      throw new ForbiddenException('Usuario no autenticado');
    }

    // Verifica si el usuario tiene al menos uno de los roles requeridos
    const hasRole = requiredRoles.some((role) => user.rol === role);
    if (!hasRole) {
      // Si el usuario no tiene el rol necesario, lanza un error de acceso prohibido
      throw new ForbiddenException('No posees el rol requerido');
    }

    // Si el usuario tiene el rol necesario, se permite el acceso a la ruta
    return true;
  }
}

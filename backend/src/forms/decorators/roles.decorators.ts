import { SetMetadata } from '@nestjs/common';
// decorador de roles para la extracción de datos de roles a comparar
export const ROLES_KEY = 'roles';
export const Roles = (...roles: string[]) => SetMetadata(ROLES_KEY, roles);

// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Verifica si existe la cookie de JWT
  const isAuthenticated = request.cookies.get("next-auth.session-token");

  if (!isAuthenticated) {
    // Redirige a la página de inicio de sesión si no está autenticado
    return NextResponse.redirect(new URL('/', request.url));
  }

  // Si está autenticado, continua normalmente
  return NextResponse.next();
}

// Configura el middleware para que solo se ejecute en ciertas rutas 
export const config = {
  matcher: ['/dashboard/:path*','/iniciosesion/:path*'], // Rutas donde se aplica el middleware
};

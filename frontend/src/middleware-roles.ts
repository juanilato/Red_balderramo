import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';

// Llave secreta usada para firmar el JWT en NextAuth, debe coincidir con la usada en tu configuración
const SECRET_KEY = process.env.NEXTAUTH_SECRET;

export async function middleware(request: NextRequest) {
  // Obtén el token JWT desde la cookie
  const token = request.cookies.get("next-auth.session-token");

  if (!token) {
    // Redirige a la página de inicio de sesión si no está autenticado
    return NextResponse.redirect(new URL('/', request.url));
  }

  try {
    // Decodifica el token JWT para obtener el rol del usuario
    const decodedToken = jwt.verify(token, SECRET_KEY);
    const userRole = decodedToken.rol;

    // Define la lógica de redirección basada en roles
    const urlPath = request.nextUrl.pathname;

    // Acceso exclusivo para 'jefe' en la ruta específica '/dashboard/jefe/crearTarea'
    if (urlPath === '/dashboard/jefe/crearTarea' && userRole !== 'jefe') {
      return NextResponse.redirect(new URL('/dashboard', request.url));
    }

    // Acceso permitido para todos los roles en otras rutas bajo '/dashboard'
    if (urlPath.startsWith('/dashboard') && (userRole === 'jefe' || userRole === 'empleado')) {
      return NextResponse.next();
    }

    // Acceso denegado por defecto si no coincide con ninguna regla
    return NextResponse.redirect(new URL('/dashboard', request.url));
  } catch (error) {
    console.error('Error al decodificar el token:', error);
    // Redirige si ocurre algún error al decodificar
    return NextResponse.redirect(new URL('/', request.url));
  }
}

// Configura el middleware para que solo se ejecute en ciertas rutas específicas de roles
export const config = {
  matcher: ['/dashboard/:path*'], // Rutas donde se aplica este middleware de roles
};

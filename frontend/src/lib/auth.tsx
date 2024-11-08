import jwt from 'jsonwebtoken';
import { GetServerSidePropsContext } from 'next';

interface AuthResult {
  isAuthenticated: boolean;
  rol?: string;
}

export const authenticateUser = (context: GetServerSidePropsContext): AuthResult => {
  const token = context.req.cookies['auth-token'];

  if (!token) {
    return { isAuthenticated: false };
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || '1234') as { rol: string };
    return { isAuthenticated: true, rol: decoded.rol };
  } catch (error) {
    console.error('Error de verificación de token:', error);
    return { isAuthenticated: false };
  }
};

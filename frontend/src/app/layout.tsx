// app/layout.tsx (o RootLayout.tsx)
import '../styles/globals.css';
import { Metadata } from 'next';
import React from 'react';
import SessionAuthProvider from '../context/SessionAuthProvider';

export const metadata: Metadata = {
  title: 'Pruebas',
  description: 'Descripcion de estas pruebas',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        {/* Envolvemos la aplicación en SessionAuthProvider para tener acceso a la sesión */}
        <main className="min-h-screen flex flex-col items-center justify-center">
          <SessionAuthProvider>{children}</SessionAuthProvider>
        </main>
      </body>
    </html>
  );
}

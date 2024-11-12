// app/layout.tsx (o RootLayout.tsx)
import React from 'react';


interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <nav></nav>

        {/* Envolvemos la aplicación en SessionAuthProvider para tener acceso a la sesión */}
        <main className="min-h-screen flex flex-col items-center justify-center">
          {children}
        </main>
      </body>
    </html>
  );
}

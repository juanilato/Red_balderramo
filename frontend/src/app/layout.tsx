"use client";

import "../styles/globals.css";
import React from "react";
import { SessionProvider } from "next-auth/react";
import BarraDeNavegacion from "../components/barradenavegacion/BarraDeNavegacion";
import { AuthProvider,  } from "../context/SessionAuthProvider";
import {ClientDataProvider} from '../context/ClientDataProvider';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav>
          <BarraDeNavegacion />
        </nav>
        {/* Envolvemos la aplicación en SessionProvider y AuthProvider */}
        <SessionProvider >
          <AuthProvider>
          <ClientDataProvider>
            <main className="min-h-screen flex flex-col items-center justify-center">
              {children}
            </main>
          </ClientDataProvider>
          </AuthProvider>
        </SessionProvider>
      </body>
    </html>
  );
}


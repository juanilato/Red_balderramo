"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useSession } from "next-auth/react";

const AuthContext = createContext<any>(null);

interface Props {
  children: React.ReactNode;
}

// Hook personalizado para acceder al contexto
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe usarse dentro de un AuthProvider");
  }
  return context;
};

// Contexto que maneja el estado de autenticación
export const AuthProvider = ({ children }: Props) => {
  const { data: session, status } = useSession();
  const [authState, setAuthState] = useState<any>(null);

  useEffect(() => {
    // Actualizar el estado local cuando la sesión cambie
    if (status === "authenticated") {
      setAuthState(session);
      // Guardar sesión en localStorage
      localStorage.setItem("session", JSON.stringify(session));
    } else if (status === "unauthenticated") {
      setAuthState(null);
      // Eliminar sesión de localStorage
      localStorage.removeItem("session");
    }
  }, [session, status]);

  const value = { session: authState, isAuthenticated: status === "authenticated" };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

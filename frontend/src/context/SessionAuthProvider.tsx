
"use client";

import { SessionProvider } from "next-auth/react";

// Este componente envuelve la aplicación con SessionProvider de NextAuth
// para manejar la sesión de manera global.
interface Props {
  children: React.ReactNode;
}

const SessionAuthProvider = ({ children }: Props) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default SessionAuthProvider;

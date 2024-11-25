"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useSession } from "next-auth/react";

interface ClientData {
  rol: string;
}

const ClientDataContext = createContext<any>(null);

export const useClientData = () => {
  const context = useContext(ClientDataContext);
  if (!context) {
    throw new Error("useClientData debe usarse dentro de un ClientDataProvider");
  }
  return context;
};

interface Props {
  children: React.ReactNode;
}

export const ClientDataProvider = ({ children }: Props) => {
  const { data: session } = useSession();
  const [clientData, setClientData] = useState<ClientData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!session?.user) return;

    const fetchClientData = async () => {
      try {
        const userId = (session.user as { id: string; token: string }).id;
        const token = (session.user as { id: string; token: string }).token;

        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/${userId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          throw new Error("Error al obtener los datos del cliente");
        }

        const data = await res.json();
        setClientData(data);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchClientData();
  }, [session]);

  return (
    <ClientDataContext.Provider value={{ clientData, loading }}>
      {children}
    </ClientDataContext.Provider>
  );
};

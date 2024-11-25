// app/dashboard/layout.tsx
"use client"
import { ReactNode, useState, useEffect } from 'react';
import { useSession, signOut } from 'next-auth/react';
import InfoUsuario from '../../components/infousuario/infoUsuario';
import styles from './styles.module.scss'; // Archivo de estilos específico para el dashboard
import React from 'react';

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const { data: session, status } = useSession();
  const [clientData, setClientData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === "loading") return;
    if (!session?.user) {
      window.location.href = "/auth/login"; // Redirige al login si no está autenticado
      return;
    }

    const fetchClientData = async () => {
        try {
          setLoading(true);
          const userId = (session.user as { id: string; token: string }).id;  
          const token = (session.user as { id: string; token: string }).token;
          
          const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/${userId}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}`,  // Usamos el token JWT para autorizar la solicitud
            },
          });
  
          if (!res.ok) {
            throw new Error('Error al obtener los datos del cliente');
          }
  
          const data = await res.json();
          setClientData(data);
        } catch (error) {
          console.error("Error:", error);
          alert("No se pudo obtener los datos del cliente.");
        } finally {
          setLoading(false);
        }
      };

    fetchClientData();
  }, [session, status]);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <div className={styles.prueba}>
        
          <InfoUsuario clientData={clientData} signOut={signOut} />
        
        
      </div>
      {children}
    </main>
  );
  
}

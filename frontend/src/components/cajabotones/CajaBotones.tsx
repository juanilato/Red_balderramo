// CajaBotones.tsx
"use client"
import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import Caja from '../botones/botonredireccionar'; // Asegúrate de que la ruta es correcta
import styles from './styles.module.scss';

const CajaBotones: React.FC = () => {
  const { data: session } = useSession();
  const [clientData, setClientData] = useState<{ rol: string } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!session?.user) return;

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
  }, [session]);

  return (
    <div className={styles.cajagrande}>
      {loading ? (
        <div>Cargando...</div>
      ) : (
        <>
          <Caja label="Crear tarea" path="/ruta1" />
          <Caja label="Ver tareas" path="/ruta2" />
          <Caja label="otro" path="/ruta2" />
          
          {/* Caja 3, solo visible para usuarios con rol de "jefe" */}
          {clientData?.rol === 'jefe' && (
            <Caja label="Gestionar usuarios" path="/dashboard/gestionusuarios" />
          )}
        </>
      )}
    </div>
  );
};

export default CajaBotones;

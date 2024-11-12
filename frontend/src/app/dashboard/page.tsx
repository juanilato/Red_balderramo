"use client"; // Indica que este es un componente del lado del cliente

import { useSession, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import InfoUsuario from "../../components/infousuario/infoUsuario";
import styles from './styles.module.scss';
import CajaBotones from '../../components/cajabotones/CajaBotones';

interface ClientData {
  rol: string;
  nombre: string;
}

const DashboardPage = () => {
  const { data: session, status } = useSession();
  const [clientData, setClientData] = useState<ClientData | null>(null); // Cambia a ClientData o null
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === "loading") return; // Espera a que la sesión se cargue
    if (!session?.user) {
      window.location.href = "/"; // Redirige a login si no está autenticado
      return;
    }

    // Función para obtener los datos del cliente desde el backend
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
    <div>
      {/* Información del usuario en la esquina superior derecha */}
      <div className={styles.prueba}>
        {clientData ? (
          <InfoUsuario clientData={clientData} signOut={signOut} />
        ) : (
          <div>Cargando...</div>
        )}
      </div>

      {/* Contenedor principal de las cajas */}
      <CajaBotones clientData={clientData} /> 
    </div>
  );
};

export default DashboardPage;

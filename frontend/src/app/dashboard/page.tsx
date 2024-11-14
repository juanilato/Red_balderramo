"use client"; // Indica que este es un componente del lado del cliente

import { useSession, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import styles from './styles.module.scss';
import CajaBotones from '../../components/cajabotones/CajaBotones';
import React from "react";

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
  }, [session, status]);

  return (
    <div>

      {/* Contenedor principal de las cajas */}
      <CajaBotones /> 

    </div>
  );
};

export default DashboardPage;
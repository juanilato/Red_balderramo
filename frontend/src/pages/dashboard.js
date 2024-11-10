"use_client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import ClientInfo from "../components/dashboard/infoCliente";


const DashboardPage = () => {
  const { data: session, status } = useSession();
  const [clientData, setClientData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === "loading") return; // Espera a que la sesión se cargue
    if (!session) {
      window.location.href = "/login"; // Redirige a login si no está autenticado
      return;
    }

    // Función para obtener los datos del cliente desde el backend
    const fetchClientData = async () => {
      try {
        setLoading(true);
        const userId = session.user.id;
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/${userId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${session.user.token}`,  // Usamos el token JWT para autorizar la solicitud
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
      <h1>Dashboard</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        clientData && <ClientInfo clientData={clientData} />
      )}
    </div>
  );
};

export default DashboardPage;


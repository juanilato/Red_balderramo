"use client"; // Indica que este es un componente del lado del cliente

import { useSession, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import ClientInfo from "../../components/dashboard/infoCliente";
import { Loader } from "../../components/formulario/components/Loader";
import { SubmitButtom } from "../../components/dashboard/SubmitButton";
import io from 'socket.io-client';
import React from 'react';
import "./styles.scss";



const DashboardPage = () => {
  const { data: session, status } = useSession();
  const [clientData, setClientData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notifications, setNotifications] = useState<string[]>([]);




  // Efecto para cargar datos del cliente
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
        const token =  (session.user as { id: string; token: string }).token; 
        
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/${userId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`, 
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

  // Conexión WebSocket solo si la sesión está cargada y el usuario está autenticado
  useEffect(() => {
    if (status === "authenticated" && session?.user) {
      const userId = (session.user as { id: string }).id;

      const socket = io('http://localhost:4000', {
        transports: ['websocket'],
        query: { userId },
      });

      socket.on('connect', () => {
        console.log('Conectado al servidor de WebSocket con ID:', socket.id);
      });

      socket.on('connect_error', (error) => {
        console.log('Error al conectar con el servidor WebSocket:', error);
      });

      socket.on('newNotification', (notification) => {
        console.log("Notificación recibida:", notification);
        
        const message = notification.message;

        setNotifications((prev) => [...prev, notification.message]);
        
        setTimeout(() => {
          setNotifications((prev) => prev.filter((msg) => msg !== message));
        }, 5000); 

      });

      // Limpieza del listener al desmontar el componente
      return () => {
        socket.disconnect();
      };
    }
  }, [session, status]);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        clientData && (
          <>
            <ClientInfo clientData={clientData} />
            <div
              style={{
                backgroundColor: (clientData as { rol: string }).rol === 'jefe' ? 'green' : 'red',
                color: 'white',
              }}
            >
              <h1>{(clientData as { rol: string }).rol === 'jefe' ? 'Bienvenido, Jefe' : 'Bienvenido, Empleado'}</h1>
            </div>
            
            {/* Sección de notificaciones */}
            <div className="notifications-container">
              {notifications.map((msg, index) => (
                <div key={index} className="notification">{msg}</div>
              ))}
            </div>
          </>
        )
      )}
      
      <SubmitButtom buttonText="Salir" onClick={signOut} isLoading={loading}>
        Salir
      </SubmitButtom>
    </div>
  );
};

export default DashboardPage;

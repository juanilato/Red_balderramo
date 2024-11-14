"use client";

import { useSession, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import { Loader } from "../../../components/iniciodesesion/components/Loader";
import InfoUsuario from '../../../components/infousuario/infoUsuario';
import io from "socket.io-client";
import React from "react";
import style from './styles.module.scss';


interface FormData {
  id: number;
  title: string;
  description: string;
  assignedUser: string;
}

const DashboardPage = () => {
  const { data: session, status } = useSession();
  const [clientData, setClientData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notifications, setNotifications] = useState<string[]>([]);
  const [formsData, setFormsData] = useState<{ [key: string]: FormData }>({});
  const [formIds, setFormIds] = useState<string[]>([]); // Almacena los IDs de los formularios

  // Función para obtener formularios
  const fetchForms = async () => {
    if (!session?.user) return;

    const userId = (session.user as { id: string }).id;
    const token = (session.user as { token: string }).token;

    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/forms/${userId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (res.ok) {
      const forms = await res.json();
      console.log("Formulario recibido:", forms); // Verifica los datos
      setFormIds(forms.map((form: { id: string }) => form.id)); // Asignar los IDs de los formularios
      setFormsData(
        forms.reduce((acc: any, form: any) => {
          acc[form.id] = form; // Asignar cada formulario al estado con su ID
          return acc;
        }, {})
      );
    } else {
      console.error("No se pudieron obtener los formularios");
    }
  };

  // Efecto para cargar datos del cliente
  useEffect(() => {
    if (status === "loading") return;
    if (!session?.user) {
      window.location.href = "/";
      return;
    }

    const fetchClientData = async () => {
      try {
        setLoading(true);
        const userId = (session.user as { id: string; token: string }).id;  
        const token = (session.user as { id: string; token: string }).token;  
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (res.ok) {
          const data = await res.json();
          setClientData(data);
        } else {
          console.error("Error al obtener los datos del cliente");
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchClientData();
  }, [session, status]);

  // Efecto para cargar los formularios de un usuario
  useEffect(() => {
    fetchForms(); // Llamar a la función fetchForms inicialmente
  }, [session, status]);

  // Conexión WebSocket
  useEffect(() => {
    const socket = io("http://localhost:4000", {
      transports: ["websocket"],
    });

    // Escuchar actualizaciones de formularios
    formIds.forEach((formId) => {
      socket.on(`formUpdate-${formId}`, (updatedData: FormData) => {
        setFormsData((prevState) => ({
          ...prevState,
          [formId]: updatedData,
        }));
      });
    });

    // Escuchar cuando un formulario ha sido creado
    socket.on("formCreated", (newForm: FormData) => {
      console.log("Nuevo formulario creado:", newForm);
      fetchForms();

      // Agregar una notificación
      setNotifications((prevState) => [
        ...prevState,
        `Nuevo formulario creado con ID: ${newForm.id}`,
      ]);
    });

    return () => {
      // Limpiar los eventos al desmontar el componente
      formIds.forEach((formId) => {
        socket.off(`formUpdate-${formId}`);
      });
      socket.off("formCreated"); // Limpiar también el evento de 'formCreated'
      socket.disconnect();
    };
  }, [formIds]);

  // Mostrar formularios y notificaciones
  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        clientData && (
          <>
            <div className="notifications-container">
              {notifications.map((msg, index) => (
                <div key={index} className="notification">{msg}</div>
              ))}
            </div>

            <div>
              {formIds.map((formId) => (
                <div key={formId}>
                  <h3>Formulario {formId}</h3>
                  <form>
                    <div>
                      <label>Título</label>
                      <input
                        type="text"
                        value={formsData[formId]?.title || ""}
                        readOnly
                      />
                    </div>
                    <div>
                      <label>Descripción</label>
                      <textarea
                        value={formsData[formId]?.description || ""}
                        readOnly
                      />
                    </div>
                  </form>
                </div>
              ))}
            </div>
          </>
        )
      )}
      <InfoUsuario clientData={clientData} signOut={signOut} />
    </div>
  );
};

export default DashboardPage;

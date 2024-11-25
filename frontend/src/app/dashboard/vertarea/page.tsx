"use client";

import { useSession, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import { Loader } from "../../../components/iniciodesesion/components/Loader";
import InfoUsuario from '../../../components/infousuario/infoUsuario';
import io from "socket.io-client";
import React from "react";
import styles from './styles.module.scss';

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
  const [notifications, setNotifications] = useState<{ id: number; message: string }[]>([]);
  const [formsData, setFormsData] = useState<{ [key: string]: FormData }>({});
  const [formIds, setFormIds] = useState<string[]>([]); 


  // Función para obtener formularios
  const fetchForms = async () => {
    if (!session?.user) return;

    const userId = (session.user as { id: string }).id;
    const token = (session.user as { token: string }).token;


    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/forms/${userId}`;


    const res = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,

      },
    });

    if (res.ok) {
      const data = await res.json();

        // Reemplazar todos los formularios
        setFormIds(data.map((form: { id: string }) => form.id));
        setFormsData(
          data.reduce((acc: any, form: any) => {
            acc[form.id] = form;
            return acc;
          }, {})
        );
      
    } else {
      console.error("No se pudieron obtener los formularios");
    }
  };

  const addNotification = (message: string) => {
    const generateUniqueId = () => Date.now() + Math.random().toString(36).slice(2);

    const id = parseInt(generateUniqueId());

    setNotifications((prevState) => [...prevState, { id, message }]);

    // Eliminar la notificación automáticamente después de 5 segundos
    
    setTimeout(() => {
      removeNotification(id);
    }, 5000);
  
  };

  // Función para eliminar notificaciones
  const removeNotification = (id: number) => {
    setNotifications((prevState) => prevState.filter((notif) => notif.id !== id));
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
    fetchForms(); 
  }, [session, status]);

  // Conexión WebSocket
  
  useEffect(() => {
    if (status === "loading" ) return;
    const userId = (session?.user as { id: string; token: string }).id; 
    const socket = io("http://localhost:4000", {
      transports: ["websocket"],
      query: {
        userId: userId, 
      },
    });
    
    // Escuchar cuando un formulario ha sido creado / modificado o 

    socket.on("formUpdate", (Form: FormData, message: string) => {
      fetchForms();
      // Agregar una notificación
      addNotification(`${message} ${Form.title}`);

    });
    
    return () => {
      // Limpiar el evento al desmontar el componente
      socket.off("formUpdate"); 
      socket.disconnect();
    };
  }, [session]);



  // Mostrar formularios y notificaciones
  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        clientData && (
          <>
            {/* Contenedor de notificaciones */}
            <div className={styles["notifications-container"]}>
              {notifications.map((notifications) => (
                <div key={notifications.id} className={styles.notification}>
                  {/* Mensaje de la notificación */}
                  <span>{notifications.message}</span>

                  {/* Botón de eliminar */}
                  <button
                    className={styles.deleteButton}
                    onClick={() => {
                      removeNotification(notifications.id);
                    }
                    }
                  >
                    X
                  </button>
                </div>
              ))}
            </div>
            {/* Lista de formularios */}
            <div className={styles.taskListContainer}>
                {formIds.map((formId) => (
                  <div key={formId} className={styles.taskCard}>
                    <div className={styles.taskHeader}>
                      <h3>Formulario {formId}</h3>
                    </div>
                    <form className={styles.taskForm}>
                      <div className={styles.taskField}>
                        <label className={styles.taskLabel}>Título</label>
                        <input
                          type="text"
                          value={formsData[formId]?.title || ""}
                          readOnly
                          className={styles.taskInput}
                        />
                      </div>
                      <div className={styles.taskField}>
                        <label className={styles.taskLabel}>Descripción</label>
                        <textarea
                          value={formsData[formId]?.description || ""}
                          readOnly
                          className={styles.taskTextarea}
                        />
                      </div>
                    </form>
                  </div>
                ))}
            </div>

          </>
        )
      )}
    </div>
  );
};

export default DashboardPage;
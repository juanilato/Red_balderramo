"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { Loader } from "../../../components/iniciodesesion/components/Loader";
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
  const [clientData, setClientData] = useState<{ forms: FormData[] } | null>(null);
  const [loading, setLoading] = useState(true);
  const [notifications, setNotifications] = useState<{ id: number; message: string }[]>([]);
  const [formsData, setFormsData] = useState<{ [key: number]: FormData }>({});


  // Función para añadir una notificación
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

  // Función para obtener los datos del cliente
  const fetchClientData = async () => {
    if (!session?.user) return;

    try {
      
      
      const userId = (session.user as { id: string; token: string }).id;
      const token = (session.user as { token: string }).token;

      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.ok) {
        const data = await res.json();
        setClientData(data); // Guardar toda la información del cliente
        setFormsData(
          data.forms.reduce((acc: { [key: number]: FormData }, form: FormData) => {
            acc[form.id] = form;
            return acc;
          }, {})
        );
      } else {
        console.error("Error al obtener los datos del cliente");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  // Función para obtener un formulario específico
  const fetchSingleForm = async (formId: number) => {
    if (!session?.user) return;

    try {
      const token = (session.user as { token: string }).token;

      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/forms/${formId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.ok) {
        const updatedForm = await res.json();

        // Actualizar el estado solo para este formulario
        setFormsData((prev) => ({
          ...prev,
          [formId]: updatedForm,
        }));
      } else {
        console.error(`Error al obtener el formulario con ID: ${formId}`);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Efecto para cargar datos iniciales del cliente
  useEffect(() => {
    if (status === "loading") return;
    if (!session?.user) {
      window.location.href = "/";
      return;
    }

    fetchClientData();
  }, [session, status]);

  // Conexión WebSocket para actualizaciones en vivo
  useEffect(() => {
    if (status === "loading") return;

    const userId = (session?.user as { id: string }).id;
    const socket = io("http://localhost:4000", {
      transports: ["websocket"],
      query: { userId },
    });

    socket.on("formUpdate", (updatedForm: { id: number }, message: string) => {
      // Actualizar solo el formulario relevante
      fetchClientData();
      //fetchSingleForm(updatedForm.id); Debería arreglarse pero no se como  =(


      // Añadir notificación
      addNotification(`${message} Formulario ID: ${updatedForm.id}`);
    });

    return () => {
      socket.off("formUpdate");
      socket.disconnect();
    };
  }, [status, session]);

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
              {notifications.map((notification) => (
                <div key={notification.id} className={styles.notification}>
                  {/* Mensaje de la notificación */}
                  <span>{notification.message}</span>

                  {/* Botón de eliminar */}
                  <button
                    className={styles.deleteButton}
                    onClick={() => removeNotification(notification.id)}
                  >
                    X
                  </button>
                </div>
              ))}
            </div>

            {/* Lista de formularios */}
            <div className={styles.taskListContainer}>
  {Object.values(formsData).map((form, index) => (
    <div key={form.id || `form-${index}`} className={styles.taskCard}>
      <div className={styles.taskHeader}>
        <h3>Formulario {form.id}</h3>
      </div>
      <form className={styles.taskForm}>
        <div className={styles.taskField}>
          <label className={styles.taskLabel}>Título</label>
          <input
            type="text"
            value={form.title || "Sin título"}
            readOnly
            className={styles.taskInput}
          />
        </div>
        <div className={styles.taskField}>
          <label className={styles.taskLabel}>Descripción</label>
          <textarea
            value={form.description || "Sin descripción"}
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

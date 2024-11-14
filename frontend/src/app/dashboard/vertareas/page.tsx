"use client";

import styles from './styles.module.scss';

import session from '';
import { ReactNode, useState, useEffect } from 'react';
import { useSession, signOut } from 'next-auth/react';

import React from 'react';

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
            <ClientInfo clientData={clientData} />
            <div
              style={{
                backgroundColor: (clientData as { rol: string }).rol === 'jefe' ? 'green' : 'red',
                color: 'white',
              }}
            >
              <h1>{(clientData as { rol: string }).rol === 'jefe' ? 'Bienvenido, Jefe' : 'Bienvenido, Empleado'}</h1>
            </div>
          </>
        )
      )}    
      <SubmitButtom buttonText = "Salir" onClick={signOut} isLoading={loading}>
      Salir
      </SubmitButtom>
    </div>
  );
};

export default DashboardPage;

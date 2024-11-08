"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Form } from "../components/formulario";

function InicioSesion() {
  const [error, setError] = useState(null);
  const router = useRouter(); // Para redireccionar

  const handleLogin = async (data) => {
    //Realiza la peticion a la base de datos llamando el auth controller generado POST
    try {
      const response = await fetch("http://localhost:4000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: 'include', // Incluir cookies en la solicitud
        body: JSON.stringify({
          usuario: data.usuario,
          password: data.password,
        }),
      });

      //Retorna error de inicio de sesion si no encuentra el usuario
      if (!response.ok) {
        throw new Error("Error en el inicio de sesión");
      }

      // Si el inicio de sesión fue exitoso, redirige al usuario
      router.push("/panel");

    } catch (error) {
      setError(error.message);
      console.error("Error de autenticación", error);
    }
  };

  //Retorna al localhost:3000 el formulario entero
  return (
    <>
      <Form title="Inicio Sesion" onSubmit={handleLogin} description="Formulario para iniciar Sesion">
        <div className="my-[10px] flex flex-col gap-4">
          <Form.Input label="Usuario" name="usuario" placeholder="Usuario..." type="text" />
          <Form.Input label="Contraseña" name="password" placeholder="Contraseña..." type="password" />
        </div>
        <Form.SubmitButtom buttonText="Iniciar Sesion" />
        {error && <p className="text-red-500">{error}</p>}
      </Form>
    </>
  );
}

export default InicioSesion;

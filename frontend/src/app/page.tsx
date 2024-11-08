"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Form } from "../components/formulario";

function InicioSesion() {
  const [error, setError] = useState(null);
  const router = useRouter(); // Importamos useRouter para redirección

  const handleLogin = async (data) => {
    try {
      const response = await fetch("http://localhost:4000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          usuario: data.usuario,
          password: data.password,
        }),
      });

      if (!response.ok) {
        throw new Error("Error en el inicio de sesión");
      }

      // Si el inicio de sesión fue exitoso, redirigimos al usuario al home
      router.push("/home");

    } catch (error) {
      setError(error.message);
      console.error("Error de autenticación", error);
    }
  };

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

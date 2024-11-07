"use client";

import React, { useState } from "react";
import { Form } from "../components/formulario";

function InicioSesion() {
  const [error, setError] = useState(null);

  const handleLogin = async (data) => {
    try {
      const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          password: data.password,
        }),
      });

      if (!response.ok) {
        throw new Error("Error en el inicio de sesión");
      }


    } catch (error) {
      setError(error.message);
      console.error("Error de autenticación", error);
    }
  };

  return (
    <>
      <Form title="Inicio Sesion" onSubmit={handleLogin} description="Formulario para iniciar Sesion">
        <div className="my-[10px] flex flex-col gap-4">
          <Form.Input label="Usuario" name="name" placeholder="Usuario..." type="text" />
          <Form.Input label="Contraseña" name="password" placeholder="Contraseña..." type="password" />
        </div>
        <Form.SubmitButtom buttonText="Iniciar Sesion" />
        {error && <p className="text-red-500">{error}</p>}
      </Form>
    </>
  );
}

export default InicioSesion;

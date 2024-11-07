'use client'

import React from "react";
import {Form} from "../components/formulario"

function inicioSesion () {
  return (
    <>
      <Form title='Inicio Sesion' onSubmit={()=>{}} description="Formulario para iniciar Sesion">
        <div className="my-[10px] flex flex-col gap-4">

          <Form.Input
            label='Usuario'
            name='name'
            placeholder="Usuario..."
            type='text'
          />

          <Form.Input
            label='Contraseña'
            name='password'
            placeholder="Contraseña..."
            type='password'
          />

        </div>

        <Form.SubmitButtom buttonText="Iniciar Sesion" />
        
        
      </Form>
    </>
  );
};

export default inicioSesion;


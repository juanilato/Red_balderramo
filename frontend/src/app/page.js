'use client';
import { Form } from '../components/iniciodesesion/index';
import React from "react";


// se obtiene el estado de la sesión y se muestra mensaje según si el usuario esta autenticado o no

export default function HomePage() {
    return (
        <main>
        <div>
            <Form title="Inicio de sesion" description="Ingrese sus datos">
                <Form.Input name="username" placeholder="Usuario" />
                <Form.Input name="password" type="password" placeholder="Contraseña" />
                <Form.SubmitButtom buttonText="Ingresar">Login</Form.SubmitButtom>
            </Form>
        </div>
        </main>
    );
}
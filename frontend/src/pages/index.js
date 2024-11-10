import { Form } from '../components/formulario/index.tsx';
import React from "react";


// se obtiene el estado de la sesión y se muestra mensaje según si el usuario esta autenticado o no

export default function HomePage() {
    return (
        <main>
        <div >
            <Form title="Login" description="Please enter your credentials">
                <Form.Input name="username" placeholder="Username" />
                <Form.Input name="password" type="password" placeholder="Password" />
                <Form.SubmitButtom>Login</Form.SubmitButtom>
            </Form>
        </div>
        </main>
    );
}
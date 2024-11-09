"use client";

import {signIn, signOut, useSession} from "next-auth/react";


export default function ButtonAuth(){
    const{ data: session, status} = useSession();
    
    if (status === "loading"){
        return <p>Cargando ...</p>

    }
    
    if (session){
        return(
            <>
            ingreso como {session.user?.email} <br/>
            
            <button onClick = {() => signOut()}> Salir</button>





            </>
        )
    }
    return (
        <>
        No logeado en <br/>
        <button onClick={() => signIn("credentials")}> Ingresar</button>
        </>
    )
}
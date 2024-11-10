"user client";

import {SessionProvider} from "next-auth/react";
// Permite que next-auth gestione la sesión y su estado 
//(como autenticado/no autenticado) de manera global, 
//sin tener que pasar manualmente el estado a través de props.

interface Props{
    children: React.ReactNode
}

const SessionAuthProvider = ({children}: Props) => {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}

export default SessionAuthProvider
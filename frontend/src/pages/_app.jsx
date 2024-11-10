import { SessionProvider } from "next-auth/react";

//Este componente envuelve la aplicación y proporciona el contexto de la sesión de NextAuth a todos los componentes.
//Cualquier componente en la aplicación puede usar useSession para verificar si un usuario está autenticado y obtener su información.
export default function App({ Component, pageProps: { session, ...pageProps } }) {
    return (
        //session = {session} Se asegura que la sesión este disponible globalmente
        <SessionProvider session={session}> 
            <Component {...pageProps} />
        </SessionProvider>
    );
}

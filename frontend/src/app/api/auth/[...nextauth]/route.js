import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// Define la configuración de autenticación usando NextAuth con un proveedor de Credentials y un jwt solicitante
const handler = NextAuth({
  providers: [
    //credentials para solicitar el login y mandar las credenciales a la base de datos
      CredentialsProvider({
          name: "Credentials",
          credentials: {
              username: { label: "username", type: "text", placeholder: "jsmith" },
              password: { label: "password", type: "password" }
          },
          async authorize(credentials, req) {
            const res = await fetch(
              
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`,
            {
                method: "POST",
                body: JSON.stringify({
                    usuario: credentials?.username,
                    password: credentials?.password,
                    

                }),
                headers: {"Content-Type": "application/json"},
            }
            );
            const user = await res.json();
            if (user.error) throw user;
            return user;
      },
    }),
  ],
  //callbacks para poder solicitar la devolución por parte del backend del jwt
  callbacks:{
    //captura toda la información de la sesión
    async jwt({token, user}){
      return {...token, ...user};
    },
    //define nuestra sesión como la anterior con el token solicitado previamente (JWT)
    async session({session, token }){
      session.user = token;
      return session
    },
  },
});

export {handler as GET, handler as POST};
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// Define la configuración de autenticación usando NextAuth con un proveedor de Credentials y un jwt solicitante
const handler = NextAuth({
  providers: [
    //credentials para solicitar el login y mandar las credenciales a la base de datos
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`, {
          method: "POST",
          body: JSON.stringify({
            usuario: credentials?.username,
            password: credentials?.password,
          }),
          headers: { "Content-Type": "application/json" },
        });

        // Verificamos si la respuesta es correcta
        if (!res.ok) {
          const error = await res.json();
          throw new Error(error.message || "Invalid credentials");
        }

        const user = await res.json();

        // Asegúrate de que el backend devuelve estos campos
        if (user && user.user && user.token) {
          return {
            id: user.user.id,        // El id del usuario
            username: user.user.username, // El nombre de usuario
            token: user.token,        // El token JWT
          };
        } else {
          throw new Error("Missing user or token data in response");
        }
      },
    }),
  ],
  // Le brinda tiempo de vida a la sesión
  session: {
    strategy: "jwt",
    maxAge: 12 * 60 * 60, // 12 horas
  },
  jwt: {
    maxAge: 12 * 60 * 60, // 12 horas
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;           // Asegúrate de que el id esté presente
        token.username = user.username; // Si también necesitas el username
        token.token = user.token;       // El token JWT
    
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;      // Asignar el id a la sesión
      session.user.username = token.username;
      session.user.token = token.token; // Asignar el token a la sesión
      return session;
    },
  },
});

export { handler as GET, handler as POST };

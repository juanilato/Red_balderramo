export { default } from "next-auth/middleware";

//middleware que permite que solo los usuarios logeados ingresen a las rutas que coloquemos aqui
export const config = {
    matcher: ["/dashboard/:path*"]
};
import { useSession, signIn, SignOut} from "next-auth/react"


export default function Component(){
    const { data: session } = useSession()
    if (session){
        return <>
            Signed in as {session.user.email} <br/>
        <button onClick= {()=>SignOut()}> Salir</button>

        </>
    }
    return <>
    Not signed in <br/>
    <button onClick = {() => signIn()}> Ingresar </button>
    </>
}
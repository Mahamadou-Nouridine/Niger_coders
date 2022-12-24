import { useState } from "react"
import { Signin } from "./components/Sign/Signin"
import { Signup } from "./components/Sign/Signup"

export const Sign = (props: { setStatus: (bool: boolean) => void, setdevelopper:(dev:dev)=>void }): JSX.Element => {
    const [login, setLogin] = useState(true)
    const setLog = (bool: boolean) => setLogin(bool)
    return <>
        {
            login
                ? <Signin setdevelopper={props.setdevelopper} setStatus={props.setStatus} setLog={setLog} />
                : <Signup setdevelopper={props.setdevelopper} setStatus={props.setStatus} setLog={setLog} />
        }
    </>
}
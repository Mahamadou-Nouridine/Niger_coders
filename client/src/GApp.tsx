import { useEffect, useState } from "react"
import App from "./App"
import { refresh } from "./Features/Auth"
import { Sign } from "./Sign"


export const GApp = (): JSX.Element => {
    const [isAuth, setIsAuth] = useState(false)
    const [dev, setDev] = useState<dev>()
    const setStatus = (bool: boolean) => setIsAuth(bool)
    const setdevelopper = (dev: dev) => setDev(dev)
    useEffect(()=>{
        refresh()
        .then((res)=>{
            if(res){
                
                setDev(res.dev)
                setIsAuth(true)
            } else {
                setIsAuth(false)
            }
        })
        .catch((err) =>{
            setIsAuth(false)
        })
    }, [])

    

    return <>
        {
            isAuth
                ? <>
                    {
                        dev?
                        <App setStatus={setStatus} setdevelopper={setdevelopper} dev={dev} />
                        :null
                    }
                </>
                : <Sign setdevelopper={setdevelopper} setStatus={setStatus} />
        }
    </>
}
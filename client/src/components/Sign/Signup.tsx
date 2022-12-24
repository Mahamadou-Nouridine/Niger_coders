import { useState } from "react"
import { signup } from "../../Features/Auth"

export const Signup = (props: { setLog: (bool: boolean) => void, setStatus: (bool: boolean) => void, setdevelopper: (dev: dev) => void }): JSX.Element => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setNom] = useState("")
    const [confirm, setConfirm] = useState("")


    const logUp = (e: any) => {
        e.preventDefault()
        if (email && password && name && confirm) {
            if (password === confirm) {
                signup(email, password, name, confirm)
                    .then(res => {
                        if (res) {
                            setConfirm("");
                            setEmail("");
                            setNom("");
                            setPassword("")
                            props.setLog(true)
                        }
                    })
            } else alert('les mots de pass ne sont pas identique')
        }

    }

    return <>
        <div className="App d-flex justify-content-center align-items-center" style={{ height: '100vh', backgroundImage: 'url(https://images.pexels.com/photos/6424589/pexels-photo-6424589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2) ', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundAttachment: 'fixed' }}>
            <form className='bg-secondary card' style={{ width: 400, height: 500, boxShadow: '4px 4px 5px black,-4px -4px 5px black' }}>
                <div className='d-flex justify-content-center mt-4'>
                    <h4 style={{ fontFamily: ' serif', fontWeight: 'bold' }}> <i className="bi bi-person-fill"></i>S'inscrire</h4>
                </div>

                <form className=' mt-5 d-flex flex-column align-items-center' >
                    <div className="input-group mb-3" style={{ width: '80%' }}>
                        <span className="bi bi-person-circle  input-group-text" id="basic-addon1"></span>
                        <input onChange={(e) => setNom(e.target.value)} value={name} type="text" className=" form-control" placeholder="Nom" />
                    </div>

                    <div className="input-group mb-3" style={{ width: '80%' }}>
                        <span className="bi bi-envelope-fill  input-group-text" id="basic-addon1"></span>
                        <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" className=" form-control" placeholder="Email" />
                    </div>

                    <div className="input-group mb-3" style={{ width: '80%' }}>
                        <span className="bi bi-shield-lock-fill input-group-text" id="basic-addon1 "></span>
                        <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" className=" form-control" placeholder="Password" />
                    </div>
                    <div className="input-group mb-3" style={{ width: '80%' }}>
                        <span className="bi bi-shield-lock-fill input-group-text" id="basic-addon1 "></span>
                        <input onChange={(e) => setConfirm(e.target.value)} value={confirm} type="password" className=" form-control" placeholder="Confirm Password" />
                    </div>
                    <button onClick={logUp} className="btn btn-primary">
                        S'inscrire
                    </button>
                    <h6 onClick={() => props.setLog(true)} style={{ cursor: "pointer" }} className='mt-4'>Possède dejà un compte <span className='text-primary'>Se Connecter</span></h6>
                </form>
            </form>
        </div>
    </>
}
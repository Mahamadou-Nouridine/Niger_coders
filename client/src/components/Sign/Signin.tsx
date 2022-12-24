import { useState } from "react"
import { refresh, signin } from "../../Features/Auth"

export const Signin = (props: { setLog: (bool: boolean) => void, setStatus: (bool: boolean) => void, setdevelopper: (dev: dev) => void }): JSX.Element => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const sign = (e: any) => {
    if (email && password) {
      e.preventDefault();
      signin(email, password)
        .then(res => {
          if (res) {
            props.setdevelopper(res.dev)
            props.setStatus(res.status)
          } else {
            props.setStatus(false)
          }
        })
      setEmail("");
      setPassword("")
    }
  }
  return <>
    <div className="App d-flex justify-content-center align-items-center" style={{ height: '100vh', backgroundImage: 'url(https://images.pexels.com/photos/6424589/pexels-photo-6424589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2) ', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundAttachment: 'fixed' }}>
      <div className='bg-secondary card' style={{ width: 400, height: 500, boxShadow: '4px 4px 5px black,-4px -4px 5px black' }}>
        <div className='d-flex justify-content-center mt-4'>
          <h4 onClick={refresh} style={{ fontFamily: ' serif', fontWeight: 'bold' }}>Se Connecter</h4>
        </div>
        <div className="d-flex justify-content-center mt-4">
          <img width={140} src="https://cdn-icons-png.flaticon.com/512/709/709722.png" alt="" />

        </div>
        <form className=' mt-5 d-flex flex-column align-items-center' >
          <div className="input-group mb-3" style={{ width: '80%' }}>
            <span className="bi bi-envelope-fill  input-group-text" id="basic-addon1"></span>
            <input required onChange={(e) => setEmail(e.target.value)} value={email} type="email" className=" form-control" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1" />
          </div>

          <div className="input-group mb-3" style={{ width: '80%' }}>
            <span className="bi bi-shield-lock-fill input-group-text" id="basic-addon1 "></span>
            <input required onChange={(e) => setPassword(e.target.value)} value={password} type="password" className=" form-control" placeholder="Password" aria-label="Username" aria-describedby="basic-addon1" />
          </div>
          <button onClick={sign} className="btn btn-primary">
            connexion
          </button>
          <h6 onClick={() => props.setLog(false)} style={{ cursor: "pointer" }} className='mt-4'>Ne possède pas un compte <span className='text-primary'>S'inscrire</span></h6>
        </form>
      </div>
    </div>
  </>
}
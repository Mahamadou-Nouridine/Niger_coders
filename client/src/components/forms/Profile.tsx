import { adjaccent } from "../colors"

export const ProfileForm = (props: { dev: dev,  handleProfile:(profile:File)=>void, trashProfile:()=>void}): JSX.Element => {
    return <>
        <div className="d-flex justify-content-around align-items-center">
            {
                props.dev.photo
                    ? <img style={{ width: 150, height: 150, borderRadius: '50%' }} src={`http://localhost:3600/uploads/${props.dev.photo}`} alt="" />
                    : <div className="d-flex justify-content-center align-items-center" style={{ width: 150, height: 150, borderRadius: '50%', backgroundColor: adjaccent }}>
                        <i className="bi bi-card-image"></i>
                    </div>
            }

            <div>
                {
                    props.dev.photo
                        ? <div>
                            <button onClick={props.trashProfile} className="btn btn-danger">effacer</button>
                        </div>
                        :null
                }
                <div className="input-group  ">
                    <input
                    
                    onChange={e=>{
                        e.preventDefault()
                        if(e.target.files){
                            props.handleProfile(e.target.files[0])
                        }
                    }}
                     className="form-control" type="file" />
                </div>

            </div>
        </div>
    </>
}
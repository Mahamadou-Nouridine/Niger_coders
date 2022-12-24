export const ExperienceForm = (props:{handleExp:(exp:experience)=>void, experience:experience|undefined}): JSX.Element => {
    return <>
        <div >
            <div className="form-groupe">
                <label htmlFor="entreprise">Entreprise</label>
                <input 
                onChange={
                    (e)=>{props.handleExp(props.experience
                    ?{...props.experience, company:e.target.value}
                    :{company:e.target.value, from:"",job:"", to:'',location:"", _id:""})}
            }
                 name="entreprise" 
                 type="text" 
                 className="form-control" />
            </div>
            <div className="form-groupe">
                <label htmlFor="post">Post</label>
                <input
                onChange={
                    (e)=>{props.handleExp(props.experience
                    ?{...props.experience, job:e.target.value}
                    :{job:e.target.value, from:"",company:"", to:'',location:"", _id:""})}
            }
                name="post" 
                type="text" 
                className="form-control" />
            </div>

            <div className="form-groupe">
                <label htmlFor="localité">Localité</label>
                <input 
                onChange={
                    (e)=>{props.handleExp(props.experience
                    ?{...props.experience, location:e.target.value}
                    :{location:e.target.value, from:"",job:"", to:'',company:"", _id:""})}
            }
                 name="localité" 
                 type="text" 
                 className="form-control" />
            </div>
            <div className="input-group py-2">
                <input 
                onChange={
                    (e)=>{props.handleExp(props.experience
                    ?{...props.experience, from:e.target.value}
                    :{from:e.target.value, company:"",job:"", to:'',location:"", _id:""})}
            }
                 type="date" className="form-control" placeholder="Postcode" aria-label="Username" />
                <span className="input-group-text">durée(de ...à)</span>
                <input
                onChange={
                    (e)=>{props.handleExp(props.experience
                    ?{...props.experience, to:e.target.value}
                    :{to:e.target.value, from:"",job:"", company:'',location:"", _id:""})}
            }
                 type="date"  className="form-control" placeholder="Region" aria-label="Server" />
            </div>
        </div>
    </>
}
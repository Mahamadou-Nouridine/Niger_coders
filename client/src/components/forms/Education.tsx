export const EducationceForm = (props: {handleEdu:(edu:education)=>void, education:education|undefined}): JSX.Element => {
    return <>
    <div >
            <div className="form-groupe">
                <label htmlFor="Ecole">Ecole</label>
                <input
                 onChange={
                    (e)=>{props.handleEdu(props.education
                    ?{...props.education, school:e.target.value}
                    :{school:e.target.value, diploma:"",from:"", to:'',location:"", _id:""})
                }} 
                    name="Ecole" 
                    type="text" 
                    className="form-control" />
            </div>
            <div className="form-groupe">
                <label htmlFor="diplome">diplome</label>
                <input 
                onChange={
                    (e)=>{props.handleEdu(props.education
                    ?{...props.education, diploma:e.target.value}
                    :{diploma:e.target.value, school:"",from:"", to:'',location:"", _id:""}); 
                }} 
                    name="diplome" 
                    type="text" 
                    className="form-control" />
            </div>

            <div className="form-groupe">
                <label htmlFor="localité">Localité</label>
                <input 
                onChange={
                    (e)=>{props.handleEdu(props.education
                    ?{...props.education, location:e.target.value}
                    :{location:e.target.value, diploma:"",from:"", to:'',school:"", _id:""})}} 
                name="localité" 
                type="text" 
                className="form-control" />
            </div>
            <div className="input-group py-2">
                <input onChange={
                    (e)=>{props.handleEdu(props.education
                    ?{...props.education, from:e.target.value}
                    :{from:e.target.value, diploma:"",school:"", to:'',location:"", _id:""})}
            }  
                type="date" 
                className="form-control" 
                placeholder="Postcode" 
                aria-label="Username" />
                <span className="input-group-text">durée(de ... à)</span>
                <input 
                onChange={
                    (e)=>{props.handleEdu(props.education
                    ?{...props.education, to:e.target.value}
                    :{to:e.target.value, diploma:"",from:"", school:'',location:"", _id:""})}} 
                type="date" 
                className="form-control" 
                placeholder="Region" 
                aria-label="Server" />
            </div>
        </div>
    </>
}
import { adjaccent, secondary } from "../colors"

export const Experience = (props:{experience:experience, trashExp:(id:string)=>void}): JSX.Element => {
    return <>
        
            <div className="d-flex justify-content-between px-2 py-1 mt-2" style={{ width: '99%', borderRadius: 5, backgroundColor: adjaccent, color: secondary }} >
                <h6 style={{ fontSize: 13 }}>
                    {props.experience.company}
                </h6>
                <h6 style={{ fontSize: 13 }}>
                {props.experience.job}
                </h6>
                <h6 style={{ fontSize: 10, width: 60 }}>
                {props.experience.from} à {props.experience.to}
                </h6>
                <h6 style={{ fontSize: 13 }}>
                {props.experience.location}
                </h6>
                <h6 style={{ fontSize: 13 }}>
                    <button onClick={()=>props.trashExp(props.experience._id)} className='btn btn-danger'><i className="bi bi-x"></i></button>
                </h6>
            </div>


    </>
}
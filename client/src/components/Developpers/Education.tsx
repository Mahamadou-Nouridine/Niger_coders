import { adjaccent, secondary } from "../colors"

export const Education = (props:{education:education}): JSX.Element => {
    return <>
  
            <div className="d-flex justify-content-between px-2 py-1 bg-light mt-2" style={{ width: '99%', borderRadius: 5, backgroundColor: adjaccent, color: secondary }} >
                <h6 style={{ fontSize: 13 }}>
                    {props.education.school}
                </h6>
                <h6 style={{ fontSize: 13 }}>
                {props.education.diploma}
                </h6>
                <h6 style={{ fontSize: 10, width: 60 }}>
                {props.education.from} to {props.education.to}
                </h6>
                <h6 style={{ fontSize: 13 }}>
                {props.education.location}
                </h6>
                
            </div>

    </>
}
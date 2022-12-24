import { adjaccent, secondary } from "../colors"

export const Experience = (props: { experience: experience | undefined }): JSX.Element => {
    return <>

        <div className="d-flex justify-content-between px-2 py-1 mt-2" style={{ width: '99%', borderRadius: 5, backgroundColor: adjaccent, color: secondary }} >
            <h6 style={{ fontSize: 13 }}>
                {props.experience?.company}
            </h6>
            <h6 style={{ fontSize: 13 }}>
                {props.experience?.job}
            </h6>
            <h6 style={{ fontSize: 10, width: 60 }}>
                10/01/22 to 10/01/22
            </h6>
            <h6 style={{ fontSize: 13 }}>
                {props.experience?.location}
            </h6>
        </div>


    </>
}
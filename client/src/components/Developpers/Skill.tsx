import { adjaccent, secondary } from "../colors"

export const Skill = (props: { skill: skill | undefined }): JSX.Element => {
    return <>

        <div className="w-100 mt-2" style={{ backgroundColor: adjaccent, color: secondary }}>
            {props.skill?.name}
            <div className=" px-2 py-1 text-light mt-2" style={{ width: `${props.skill?.percentage}%`, borderTopRightRadius: 5, borderBottomRightRadius: 5, marginBottom: 10, fontSize: 6, fontWeight: 'bold',textAlign: "center", backgroundColor: secondary }} >
                {props.skill?.percentage.toString()}%  
            </div>
        </div>

    </>
}
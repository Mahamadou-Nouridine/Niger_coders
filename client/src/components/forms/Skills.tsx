export const SkillForm = (props: { handleSkill: (skill: skill) => void, skill: skill | undefined }): JSX.Element => {

    return <>
        <div >
            <div className="form-groupe">
                <label htmlFor="Nom">Nom</label>
                <input
                    onChange={
                        (e) => {
                            props.handleSkill(props.skill
                                ? { ...props.skill, name: e.target.value }
                                : { name: e.target.value, percentage: 0, _id: "" });
                        }}
                    value={props.skill?.name}
                    name="Nom" type="text"
                    className="form-control" />
            </div>
            <div className="form-groupe">
                <label htmlFor="Pourcentage">Pourcentage</label>
                <input
                    onChange={
                        (e) => {
                            props.handleSkill(props.skill
                                ? { ...props.skill, percentage: Number(e.target.value) }
                                : { name: "", percentage: Number(e.target.value), _id: "" });
                        }}
                    name="Pourcentage"
                    placeholder="< 100 et > 0"
                    min={1}
                    max={100}
                    type="number" className="form-control" />
            </div>
        </div>
    </>
}
export const Info = (props: { handleInfo: (info: infor) => void, info: infor  }): JSX.Element => {
    return <>
        <div >
            <div className="form-groupe">
                <label htmlFor="Localité">Localité</label>
                <input
                value={props.info.location}
                    onChange={
                        (e) => {
                            props.handleInfo(props.info
                                ? { ...props.info, location: e.target.value }
                                : { company: "", location: e.target.value, bio: "", github: "" })
                        }}
                    name="Localité" type="text" className="form-control" />
            </div>
            <div className="form-groupe">
                <label htmlFor="Company">Company</label>
                <input
                value={props.info.company}
                    onChange={
                        (e) => {
                            props.handleInfo(props.info
                                ? { ...props.info, company: e.target.value }
                                : { location: "", company: e.target.value, bio: "", github: "" })
                        }}
                    name="Company" type="text" className="form-control" />
            </div>

            <div className="form-groupe">
                <label htmlFor="Bio">Bio</label>
                <input
                value={props.info.bio}
                    onChange={
                        (e) => {
                            props.handleInfo(props.info
                                ? { ...props.info, bio: e.target.value }
                                : { company: "", bio: e.target.value, location: "", github: "" })
                        }}
                    name="Bio" type="text" className="form-control" />
            </div>
            <div className="form-groupe">
                <label htmlFor="Github user-name">Github user-name</label>
                <input
                value={props.info.github}
                    onChange={
                        (e) => {
                            props.handleInfo(props.info
                                ? { ...props.info, github: e.target.value }
                                : { company: "", github: e.target.value, bio: "", location: "" })
                        }}
                    name="Github user-name" type="text" className="form-control" />
            </div>
        </div>
    </>
}
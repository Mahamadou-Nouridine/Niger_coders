export const Social = (props:{handleSocial:(social: socialMedia)=>void, social:socialMedia|undefined}): JSX.Element => {
    return <>
    <div >
            <div className="form-groupe">
                <label htmlFor="Name">Name(minuscule)</label>
                <input 
                onChange={
                    (e) => {
                        props.handleSocial(props.social
                            ? { ...props.social, name: e.target.value }
                            : { name: e.target.value, link: "", _id: "" });
                    }}
                placeholder="facebook"  name="Name" type="text" className="form-control" />
            </div>
            <div className="form-groupe">
                <label htmlFor="Link">Link</label>
                <input 
                onChange={
                    (e) => {
                        props.handleSocial(props.social
                            ? { ...props.social, link: e.target.value }
                            : { link: e.target.value, name: "", _id: "" });
                    }}
                name="Link" placeholder="eg https://facebook/userName" type="text" className="form-control" />
            </div>
        </div>
    </>
}
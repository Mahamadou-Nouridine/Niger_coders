export const Post = (props:{post:string, handlePost:(post:string)=>void}): JSX.Element => {
    return <>
    <div >
            <div className="form-groupe">
                <label htmlFor="post">Post</label>
                <input
                value={props.post}
                onChange={(e)=>{props.handlePost(e.target.value)
                }}
                placeholder="entrez votre post"  name="post" type="text" className="form-control" />
            </div>
        </div>
    </>
}
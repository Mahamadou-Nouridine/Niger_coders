import { accent, adjaccent, primary, secondary } from "../colors"
import { Comment } from "../Comment"
import {useState} from 'react'

export const SelectedPost = (props: { post: post, devId : string, setStatus:(bool:boolean)=>void, postSet:(post:post)=>void, createComment:(authorId: string, postId: string, text: string, cb1: (post: post) => void, cb2: (dev: dev) => void, withPost: boolean) => void, selectPost:(post:post)=>void}): JSX.Element => {

    const [text, setText] = useState<string>("")

    const createComment = (e:any)=>{
        e.preventDefault()
        props.createComment(props.devId,props.post._id,text,props.selectPost,()=>{}, true)
        setText('')
    }

    return <>
        <div className="   card d-flex flex-column align-items-center" style={{ maxWidth: 700, height: '100%', width: '100%', minWidth: 220, background: `linear-gradient(to bottom,${accent}, ${secondary} )` }}>
            <div className=" mt-2 ps-1 pt-2 d-flex rounded" style={{ width: '98%', backgroundColor: secondary, color: primary }}>
                <div>
                    {
                        props.post.devPhoto
                            ? <img className='m-1' src={`http://localhost:3600/uploads/${props.post.devPhoto}`} alt="" style={{ width: 100, height: 100 }} />
                            : <div className='m-1 
                            d-flex justify-content-center align-items-center rounded' style={{ width: 100, height: 100, backgroundColor:adjaccent }} >
                                <h1  style={{color: secondary}}>
                                    {props.post.devName[0]}
                                </h1>
                            </div>
                    }

                    <h6 style={{ height: 15 }} className="text-center text-white">{props.post.devName}</h6>
                </div>
                <div className='align-self-end ms-1'>
                    <h6>{props.post.text}</h6>
                    <p className="text-secondary">posted on {props.post.date}</p>
                    <div className='d-flex'>
                        <div className="likes d-flex ">
                            <h5><i className="bi bi-hand-thumbs-up me-2"></i></h5>
                            <h5><i className="bi bi-hand-thumbs-down me-2"></i></h5>
                        </div>

                    </div>
                </div>
            </div>
            <form className=" w-100 d-flex justify-content-center mt-1 mb-1">
                <textarea
                value={text}
                onChange={(e)=>setText(e.target.value)}
                 placeholder="Laissez un commentaire ici" className="form-control" id="exampleFormControlTextarea1" rows={1} style={{ width: '90%' }} />
                <button onClick={createComment} style={{ backgroundColor: accent }} type='submit' className="btn"><i className="bi bi-send-fill"></i></button>
            </form>
            <div className="" style={{ width: '100%', height: '100%', overflow: 'scroll' }}>
                {
                    props.post.comments?.map((comment, key) => <Comment key={key} postSet={props.postSet} setStatus={props.setStatus} postId={props.post._id} devId = {props.devId} comment={comment}/> )
                }
            </div>
        </div>
    </>
}
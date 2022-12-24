import { adjaccent, primary, secondary } from "../colors"
import { Comment } from "../Comment"

export const Post = (props: { post: post, selectPost: (post: post) => void, devId:string, setStatus:(bool:boolean)=>void }): JSX.Element => {
    return <>
        <div className="rounded mt-2 ps-1 pt-2 d-flex" style={{ width: '98%', backgroundColor: secondary, color: primary }}>
            <div>
                {
                    props.post.devPhoto
                        ? <img onClick={() => props.selectPost(props.post)} className='m-1 rounded' src={`http://localhost:3600/uploads/${props.post.devPhoto}`} alt="" style={{ width: 100, height: 100, cursor: "pointer" }} />
                        : <h1 onClick={() => props.selectPost(props.post)} className='rounded d-flex justify-content-center align-items-center' style={{ width: 100, height: 100, cursor: "pointer", backgroundColor: adjaccent, color: secondary }}>
                            {props.post.devName[0]}
                        </h1>

                }
                <h6 style={{ height: 15 }} className="text-center text-white">{props.post.devName}</h6>
            </div>
            <div className='align-self-end ms-2'>
                <h6>{props.post.text}</h6>
                <p className="text-secondary">posted on {props.post.date}</p>
                <div className='d-flex'>
                    <div className="likes d-flex ">
                        <h5><i className="bi bi-hand-thumbs-up me-2"></i></h5>
                        <h5><i className="bi bi-hand-thumbs-down me-2"></i></h5>
                    </div>

                    <i><i className="bi bi-chat-left-dots ms-5"></i> <span className=" text-light rounded">{props.post.comments?.length}</span></i>
                </div>
            </div>
        </div>
    </>
}
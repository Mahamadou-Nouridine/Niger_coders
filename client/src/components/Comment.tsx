import {  adjaccent, secondary } from "./colors"
import {deleteComment} from '../Features/comment'
import {refresh} from '../Features/Auth'

export const Comment = (props: { comment: comment, devId: string, postId:string, devSet?:(dev:dev)=> void, postSet?:(post:post)=>void, setStatus:(bool:boolean)=>void}): JSX.Element => {


    const trashComment = () => {
            deleteComment(props.comment._id, props.postId)
                .then(res => {
                    if (res) {
                        if(typeof props.postSet !== 'undefined'){
                            props.postSet(res.post)
                        }
                        if(typeof props.devSet !== 'undefined'){
                            props.devSet(res.dev)
                        }
                        alert("commentaire supprimée avec succèss")
                    } else if (res === false) {
                       refresh()
                            .then((res) => {
                                if (res) {
                                    if(typeof props.devSet !== 'undefined'){
                                        props.devSet(res.dev)
                                    }
                                    props.setStatus(true)
                                    trashComment()
                                } else {
                                    props.setStatus(false)
                                    return
                                }
                            })
                            .catch((err) => {
                                props.setStatus(false)
                            })
                    }
                })
    }


    return <>
        <div className="mb-1 mx-2  bg-light d-flex justify-content-between mt-1 p-2 rounded align-items-center" style={{ width: '97%' }}>
            {
                props.comment.author.photo ?
                    <img src={`http://localhost:3600/uploads/${props.comment.author.photo}`} alt="" style={{ width: 40, height: 40, borderRadius: '50%' }} />
                    : <div className="  d-flex justify-content-center align-items-center" style={{ width: 40, height: 40, backgroundColor: adjaccent, borderRadius: '50%' }}>
                        <span>{props.comment.author.name[0]}</span>
                    </div>
            }
            <p style={{ width: '80%', color: secondary }}>
                {props.comment.text}
            </p>
            <p style={{ width: '10px', color: secondary, height: 10 }}>
                {
                    props.comment.author.authId === props.devId
                    ?<i onClick= {trashComment} className="bi bi-x-circle-fill text-danger"></i>
                    :null
                }
            </p>
        </div>
    </>
}
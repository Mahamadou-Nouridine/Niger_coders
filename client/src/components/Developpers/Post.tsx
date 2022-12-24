import { Comment } from "../Comment"
import {useState} from 'react'
import { accent } from "../colors"

export const Post = (props:{cle:number,post:post, devId:string, setStatus:(bool:boolean)=>void, selectdev:(dev:dev)=>void, createComment: (authorId: string, postId: string, text: string, cb1: (post: post) => void, cb2: (dev: dev) => void, withPost: boolean) => void}): JSX.Element => {

    const [text, setText] = useState<string>("")

    const createComment = (e:any)=>{
        e.preventDefault()
        props.createComment(props.devId,props.post._id,text,()=>{},props.selectdev, false)
        setText('')
    }
    
    return <>
        <div className="card mt-2 ps-1 pt-2 " style={{ width: '98%' }}>
            <h6>{props.post.text}</h6>
            <p className="text-secondary">posted on {props.post.date}</p>
            <div className='d-flex'>
                <div className="likes d-flex ">
                    <h5><i className="bi bi-hand-thumbs-up me-2"></i></h5>
                    <h5><i className="bi bi-hand-thumbs-down me-2"></i></h5>
                </div>
                <button onClick={()=>console.log(`#staticBackdrop${props.cle}`)} className="btn  me-2 mb-2" 
                style={{backgroundColor: accent}}
                data-bs-toggle="modal" data-bs-target={`#staticBackdrop${props.cle}`}><i className="bi bi-chat-left-dots"></i><span className="bg-light text-dark rounded">{props.post.comments?props.post.comments.length:0}</span></button>
                
                <div className="modal fade" id={`staticBackdrop${props.cle}`} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog  modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="staticBackdropLabel">{props.post.text}</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <form action="">
                                <div className="modal-body">
                                    <div className="mb-3">
                                        <textarea 
                                        value={text}
                                        onChange = {(e)=>setText(e.target.value)}
                                        className="form-control" id="exampleFormControlTextarea1" rows={3}></textarea>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">annuler</button>
                                    <button
                                    onClick={createComment}
                                     type="button" className="btn " 
                                     style={{backgroundColor: accent}}
                                     data-bs-dismiss="modal">envoyer</button>
                                </div>
                            </form>
                            <div style={{ height: 100, overflow: 'scroll' }}>
                                {
                                    props.post.comments?.map((comment, key) => <Comment key={key} setStatus={props.setStatus} postId={props.post._id} devSet = {props.selectdev} devId={props.devId} comment={comment} />)
                                }
                                    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}
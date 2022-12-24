import { useState } from "react"
import { adjaccent, accent } from "../colors"
import { Comment } from "../Comment"

export const Post = (props:{post:post, trashPost:(postId:string)=>void, createComment:(authorId: string, postId: string, text: string, cb1: (post: post) => void, cb2: (dev: dev) => void, withPost: boolean)=>void, setStatus:(bool:boolean)=>void, devSet : (dev:dev)=>void}): JSX.Element => {
    

    const [comment, setComment] = useState<string>("")



    return <>
        <div className="card mt-2 ps-1 pt-2 " style={{ width: '98%', backgroundColor: adjaccent }}>
            <h6>{props.post.text}</h6>
            <p className="text-secondary">posted on {props.post.date}</p>
            <div className='d-flex '>
                <div className="likes d-flex  me-2">
                    <h5><i className="bi bi-hand-thumbs-up "></i></h5>
                    <h5><i className="bi bi-hand-thumbs-down "></i></h5>
                </div>
                <button onClick={()=>props.trashPost(props.post._id)} className="btn btn-danger mb-2"><i className="bi bi-trash"></i></button>
                <button className="btn ms-4 me-2 mb-2" data-bs-toggle="modal" data-bs-target="#element1" style={{backgroundColor: accent}}><i className="bi bi-chat-left-dots"></i> <span className="bg-light text-dark rounded">{props.post.comments?.length}</span></button>


                <div className="modal fade" id="element1" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="element1" aria-hidden="true">
                    <div className="modal-dialog  modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="element1">{props.post.text}</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <form action="">
                                <div className="modal-body">
                                    <div className="mb-3">
                                        <textarea
                                        value={comment}
                                        onChange={(e)=>setComment(e.target.value)}

                                        className="form-control" id="exampleFormControlTextarea1" rows={3}></textarea>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">annuler</button>
                                    <button
                                    onClick={()=>{props.createComment(props.post.devId, props.post._id, comment, ()=>{},props.devSet, false); setComment("")}}
                                     type="button" 
                                     style={{backgroundColor:accent}}
                                     className="btn" data-bs-dismiss="modal">envoyer</button>
                                </div>
                            </form>
                            <div style={{ height: 100, overflow: 'scroll' }}>
                                {
                                    props.post.comments?.map((comment, key) =><Comment key={key} devSet={props.devSet} setStatus={props.setStatus} postId={props.post._id} devId={props.post.devId}  comment={comment} />)
                                }
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}
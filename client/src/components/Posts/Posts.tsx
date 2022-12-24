import { useEffect, useState } from "react"
import { getPosts } from "../../Features/posts"
import { accent, primary, secondary } from "../colors"
import { NoComment } from "./NoComment"
import { Post } from "./Post"
import { PostMd } from "./PostMd"
import { SelectedPost } from "./SelectetedPost"



export const Posts = (props:{devId: string, setStatus:(bool:boolean)=>void, createComment:(authorId: string, postId: string, text: string, cb1: (post: post) => void, cb2: (dev: dev) => void, withPost: boolean) => void}): JSX.Element => {

    const [selected, setSelected] = useState<post>()

    const selectPost = (post:post) => setSelected(post)
    const [posts, setPosts] = useState<post[]>()

    useEffect(() => {
        getPosts().then(posts => {
            if (posts) {
                setPosts(posts)
            } else setPosts(undefined)
            return 
        })
    }, [])

    // let posts:postShow[] = [];
    // for(let developper of props.developpers){
    //     if(developper.posts){
    //         for (let post of developper.posts){
    //             posts.push({devName: developper.name, devPhoto: developper.photo,...post})
    //         }
    //     }
    // }

    return <>


        <div className="offcanvas offcanvas-start  d-block d-lg-none" tabIndex={-1} id="offcanvasExample" aria-labelledby="offcanvasExampleLabel" style={{ width: 450  }}>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>

            <div className=" " style={{ width: 450, height: '100%' }}>

                <div className="w-100 card d-flex flex-column align-items-center" style={{ width: '50%', overflow: 'scroll', height: '100%', background: `linear-gradient(to bottom,${secondary}, ${accent} )` }}>
                {
                    posts?
                    posts.map((post, key) => <PostMd key={key} selectPost={selectPost}  post={post}/>)
                    :"No post"
                }
                </div>
            </div>


        </div>

        <div className=" d-lg-block d-none " style={{ width: 560 }}>

            <div className="   w-100 card " style={{ width: '50%', overflow: 'scroll', height: '100%', background: `linear-gradient(to bottom,${secondary}, ${accent} )` }}>
                {
                    posts?.map((post, key) => <Post key={key}  setStatus={props.setStatus} devId={props.devId} selectPost={selectPost} post= {post}/>)
                }
                
            </div>
        </div>


        <div className=' d-flex justify-content-center align-items-center' style={{ width: '100%', backgroundColor: primary }}>
            <button style={{  position: 'absolute', top: 0, left: 40, backgroundColor: accent }} className="d-block d-lg-none btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                <i className="bi bi-list"></i>
            </button>
            <div className="" style={{ height: 600, width: '50%' }}>

                {!selected ? <NoComment />
                    : <SelectedPost selectPost={selectPost} createComment={props.createComment} postSet={selectPost} setStatus={props.setStatus} devId = {props.devId} post={selected} />}
            </div>

        </div>

    </>
}
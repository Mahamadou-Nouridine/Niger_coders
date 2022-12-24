import axios from "axios"

export const addComment = async (authorId:string, postId:string, ownerId:string, text:string) => {
    try {
        const response = await axios.post('http://localhost:3600/comments',
            { authorId, postId, ownerId, text },
            {
                headers: { 'Content-Type': 'application/json', authorization: 'bearer ' + localStorage.getItem('accessToken') },
            }
        )
        if (response.status === 200) {
            return {dev: response.data.dev as dev, post: response.data.post as post}  
        }
    } catch (error) {
        return false
    }
}

export const deleteComment = async (commentId:string, postId:string) => {
    try {
        const response = await axios.delete('http://localhost:3600/comments',
            {
                data: { commentId, postId },
                headers: { 'Content-Type': 'application/json', authorization: 'bearer ' + localStorage.getItem('accessToken') },
            }
        )
        if (response.status === 200) {
            return {dev: response.data.dev as dev, post: response.data.post as post}
        }
    } catch (error: any) {
        return false
    }
}
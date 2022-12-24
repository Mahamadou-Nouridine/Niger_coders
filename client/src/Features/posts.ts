import axios from "axios";

export const getPosts = async () => {
    try {
        const response = await axios.get('http://localhost:3600/posts')
        if (response.status === 200) {
            return response.data as post[]
        }
    } catch (error) {
        return false
    }
}

export const addPost = async (text: string, devId: string) => {
    try {
        const response = await axios.post('http://localhost:3600/posts',
            { text, devId },
            {
                headers: { 
                    'Content-Type': 'application/json',
                    authorization: 'bearer ' +localStorage.getItem('accessToken')
                },
            }
        )
        if (response.status === 200) {
            return response.data as dev
        }
    } catch (error) {
        return false
    }
}

export const deletePost = async (postId:string, devId:string) => {
    try {
        const response = await axios.delete('http://localhost:3600/posts',
            {
                data: { devId, postId },
                headers: { 
                    'Content-Type': 'application/json',
                    authorization: 'bearer ' +localStorage.getItem('accessToken')
                },
            }
        )
        if (response.status === 200) {
            return response.data as dev
        }
    } catch (error) {
        return false
    }
}


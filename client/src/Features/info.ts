import axios from "axios";

export const editInfo = async (location:string,company:string,bio:string,github:string, devId:string) => {
    try {
        const response = await axios.put('http://localhost:3600/info',
            { location,company,bio,github, devId },
            {
                headers: { 'Content-Type': 'application/json', authorization: 'bearer ' + localStorage.getItem('accessToken') },
            }
        )
        if (response.status === 200) {
            return response.data as dev
        }
    } catch (error) {
        return false
    }
}
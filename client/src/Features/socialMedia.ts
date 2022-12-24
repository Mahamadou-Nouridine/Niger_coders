import axios from "axios"

export const addSocialM = async (devId: string, name: string, link: string) => {
    try {
        const response = await axios.post('http://localhost:3600/social',
            { devId, name, link },
            {
                headers: { 'Content-Type': 'application/json', authorization: 'bearer ' + localStorage.getItem('accessToken') },
            }
        )
        if (response.status === 200) {
            return response.data as dev

        }
    } catch (error: any) {
        if (error.response.status === 409) alert('reseau social exist djà')
        console.log(error);
        return false
    }
}

export const deleteSocialM = async (devId: string, socialId: string) => {
    try {
        const response = await axios.delete('http://localhost:3600/social',
            {
                data: { devId, socialId },
                headers: { 'Content-Type': 'application/json', authorization: 'bearer ' + localStorage.getItem('accessToken') },
            }
        )
        if (response.status === 200) {
            return response.data as dev
        }
    } catch (error) {
        console.log(error);
        return false
    }
}

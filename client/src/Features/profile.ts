import axios from "axios"


export const putProfile = async (data: FormData) => {
    try {
        const response = await axios.put('http://localhost:3600/profile',
            data,
            {
                headers: { 'Content-Type': 'application/json', authorization: 'bearer ' + localStorage.getItem('accessToken') }
            }
        )
        if (response.status === 200) {
            return response.data as dev
        }
    } catch (error) {
        return false
    }
}

export const deleteProfile = async (devId: string) => {
    try {
        const response = await axios.delete('http://localhost:3600/profile',
            {
                data: { devId },
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

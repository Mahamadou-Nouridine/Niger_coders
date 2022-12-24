import axios from "axios"

export const getAllDev = async() => {
    try {
    const response = await axios.get('http://localhost:3600/developpers')
    if(response.status === 200) {
        return response.data as dev[]
    }
    } catch (error) {
    }
}

export const getOneDev = async( name: string) => {
    try {
    const response = await axios.get(`http://localhost:3600/developpers/${name}`,
    {
        headers: { authorization : 'Bearer '+localStorage.getItem('accessToken')},
    },
    )
    if(response.status === 200) {
        return response.data
    }
    } catch (error) {
    }
}
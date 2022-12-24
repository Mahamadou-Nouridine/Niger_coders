import axios from "axios"

export const addExperience = async (company: string, job: string, from: string, to: string, location: string, devId: string) => {
    try {
        const response = await axios.post('http://localhost:3600/experience',
            { company, job, from, to, location, devId },
            {
                headers: { 'Content-Type': 'application/json', authorization: 'bearer '+ localStorage.getItem('accessToken')},
            }
        )
        if(response.status === 200){
            return response.data as dev
        }
    } catch (error) {
        return false
    }
}

export const deleteExperience = async (devId: string, expId: string) => {
    try {
        const response = await axios.delete('http://localhost:3600/experience',
            { 
                data:{devId, expId}, 
                headers: { 'Content-Type': 'application/json', authorization: 'bearer '+ localStorage.getItem('accessToken')}, 
            }
        )
        if(response.status === 200){
            return response.data as dev
        }
    } catch (error) {
        return false
    }
}
import axios from "axios"

export const addESkill = async (devId: string, name: string, percentage: number) => {
    try {
        const response = await axios.post('http://localhost:3600/skills',
            { devId, name, percentage },
            {
                headers: { 'Content-Type': 'application/json', authorization: 'bearer ' + localStorage.getItem('accessToken') },
            }
        )
        if (response.status === 200) {
            return response.data as dev
        }
    } catch (error:any) {
        if(error.response.status === 409) {
            alert('skill existe deja')
            return "skill existe deja"
        }
        return false
    }
}

export const deleteSkill = async (devId: string, skillId: string) => {
    try {
        const response = await axios.delete('http://localhost:3600/skills',
            {
                data: { devId, skillId },
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

export const editSkill = async (devId: string, skillId: string, percentage: number) => {
    try {
        const response = await axios.put('http://localhost:3600/skills',
            { devId, skillId, percentage },
            {
                headers: { 'Content-Type': 'application/json', authorization: 'bearer ' + localStorage.getItem('accessToken') },
            }
        )
        if (response.status === 200) {
            return response.data as dev
        }
    } catch (error:any) {
        
        return false
    }
}
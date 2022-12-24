import axios, { AxiosError } from "axios"
import { refresh } from "./Auth";

export const addEducation = async (diploma: string, school: string, from: string, to: string, location: string, devId: string) => {
    try {
        const response = await axios.post('http://localhost:3600/education',
            { diploma, school, from, to, location, devId },
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

export const deleteEducation = async (devId: string, eduId: string) => {
    try {
        const response = await axios.delete('http://localhost:3600/education',
            {
                data: { devId, eduId },
                headers: { 'Content-Type': 'application/json', authorization: 'bearer ' + localStorage.getItem('accessToken') },
            }
        )
        if (response.status === 200) {
            return response.data as dev
        }
    } catch (error: any) {
        return false
    }
}
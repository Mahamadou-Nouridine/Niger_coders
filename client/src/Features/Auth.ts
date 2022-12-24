import axios from "axios"
import { log } from "console"

export const signin = async (email: string, password: string) => {
    if (email.length && password.length) {
        try {
            const response = await axios.post('http://localhost:3600/auth/login',
                {
                    email,
                    password
                },
                {
                    headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Credentials': true },
                    withCredentials: true
                }
            )
            if (response.status === 200) {
                localStorage.setItem('accessToken', response.data.accessToken)
                return { status: true, dev: response.data.dev as dev }
            }
        } catch (error:any) {
            if(error.response.status === 401) {
                alert("non autorisé")
            }
            return false
        }
    }
}

export const signup = async (email: string, password: string, name: string, confirm: string) => {
    if (email && password && name && confirm) {
        if (password !== confirm) {
            alert("the passwords are not the same")
        } else {
            try {
                const response = await axios.post('http://localhost:3600/developpers',
                    {
                        name,
                        password,
                        email
                    },
                    {
                        headers: { 'Content-Type': 'application/json' },
                        withCredentials: true
                    }
                )
                if (response.status === 200) {
                    alert('Compte créé avec succès veuiller vous connecter')
                    return { status: true, dev: response.data as dev }
                }
            } catch (error:any) {
                if(error.response.status === 409){
                    alert("compte existe deja veuillez vous connecter")
                }
                return false
            }
        }
    }
}

export const refresh = async () => {
    try {
        const response = await axios.get('http://localhost:3600/auth/refresh',
            {
                withCredentials: true
            })
        const data = await Object(response.data);
        if (data) {
            localStorage.setItem('accessToken', data.accessToken)
            return { status: true, dev: data.dev as dev }
        } else {
            alert("votre session a expiré vueillez vous connecter")
            return false
        }
    } catch (error) {
        alert("votre session a expiré vueillez vous connecter")
        return false
    }
}

export const logout = async () => {
    try {
        const response = await axios.get('http://localhost:3600/auth/logout',{withCredentials: true});
        
        if(response.status === 204||200) {
            return true
        }
    } catch (error) {
        return false
    }
}
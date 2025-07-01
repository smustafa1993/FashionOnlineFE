import Axios  from "axios"

export const BASE_URL = "http://localhost:3001"

const Client = Axios.create({ baseURL: BASE_URL })

Client.interceptors.request.use(
    async (config) => {
        //the token here is from the token we wrote in auth.js, it is intercepting that post?
        const token = localStorage.getItem('token')

        if(token) {
            config.headers['authorization'] = `Bearer ${token}`
        }

        return config
    }, 
    async (error) => {
        console.log({msg: "Axios Interceptor Error", error})
        throw error
    }
)

export default Client
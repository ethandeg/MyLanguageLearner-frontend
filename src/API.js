import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:5000";
class API {
    static token;
    static async getLanguages() {
        const res = await axios.get(`${BASE_URL}/language`)
        return res
    }

    static async getUserInfo() {
        const res = await axios.get(`${BASE_URL}/user/testuser`)
        console.log(res)
        return res
    }

    static async register(userData) {
        console.log(userData)
        const res = await axios.post(`${BASE_URL}/auth/register`, userData)
        API.token = res.data._token
        console.log(API.token)
        console.log(res)
        return res
    }

}


export default API
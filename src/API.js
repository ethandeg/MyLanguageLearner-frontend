import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:5000";
class API {
    static token;
    static async getLanguages() {
        const res = await axios.get(`${BASE_URL}/language`)
        return res
    }

    static async getUserInfo(username) {
        const res = await axios.get(`${BASE_URL}/user/${username}`)
        return res
    }

    static async register(userData) {
        const res = await axios.post(`${BASE_URL}/auth/register`, userData)
        API.token = res.data._token
        localStorage.setItem('token', API.token)
        return res
    }

    static async login(userData) {
        const res = await axios.post(`${BASE_URL}/auth/login`, userData)
        API.token = res.data._token
        localStorage.setItem('token', API.token)
        return res
    }

}


export default API
import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:5000";
class API {

    static async getLanguages(){
        const res = await axios.get(`${BASE_URL}/language`)
        return res
    }

    static async getUserInfo(){
        const res = await axios.get(`${BASE_URL}/user/testuser`)
        console.log(res)
        return res
    }
}


export default API
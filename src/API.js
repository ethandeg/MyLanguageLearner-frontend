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

    static async createDeck(username, name) {
        const res = await axios.post(`${BASE_URL}/flashcards/deck/new`, { username, name })
        return res
    }

    static async getDeck(deckId) {
        const res = await axios.get(`${BASE_URL}/flashcards/deck/${deckId}`)
        return res
    }

    static async createFlashCard(deckId, frontSide, backSide){
        const res = await axios.post(`${BASE_URL}/flashcards`, {deckId, frontSide, backSide})
        return res
    }

    static async startLearning(username, languageCode){
        const res = await axios.post(`${BASE_URL}/user/language/new`, {username, languageCode})
        return res
    }

    static async quitLearning(username, languageCode) {
        console.log(username, languageCode)
        const res = await axios({
            method: 'DELETE',
            url: `${BASE_URL}/user/language/remove`,
            headers: { 'Content-type': 'application/json' },
            data:
                { 'username': username, 'languageCode': languageCode }
        })

        return res

    }

}


export default API
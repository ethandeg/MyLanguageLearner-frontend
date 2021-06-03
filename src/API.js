import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:5000";

class API {
    static token;

    static async request(endpoint, data = {}, method = "get") {
        console.debug("API Call:", endpoint, data, method);
    
        const url = `${BASE_URL}/${endpoint}`;
        const headers = { authorization: `${API.token}` };
        const params = (method === "get")
            ? data
            : {};
    
        try {

          return (await axios({ url, method, data, params, headers }));
        } catch (err) {
          console.error("API Error:", err.response);
          let message = err.response.data.error.message;
          throw Array.isArray(message) ? message : [message];
        }
      }

    static async getLanguages() {
        let res = await this.request(`language`);
        return res;
    }

    static async getUserInfo(username) {
        const res = await this.request(`user/${username}`)
        return res
    }

    static async register(userData) {
        const res = await this.request(`auth/register`, userData, "post")
        API.token = res.data._token
        localStorage.setItem('token', API.token)
        return res
    }

    static async login(userData) {
            const res = await this.request(`auth/login`, userData, 'post')
            API.token = res.data._token
            localStorage.setItem('token', API.token)
            return res

    }

    static async createDeck(username, name) {
        const res = await this.request(`flashcards/deck`, {username, name}, "post")
        return res
    }

    static async getDeck(deckId) {
        // const res = await axios.get(`${BASE_URL}/flashcards/deck/${deckId}`)
        // return res
        const res = await this.request(`flashcards/deck/${deckId}`)
        return res
    }

    static async createFlashCard(deckId, frontSide, backSide) {
        // const res = await axios.post(`${BASE_URL}/flashcards`, { deckId, frontSide, backSide })
        // return res
        const res = await this.request(`flashcards`, {deckId, frontSide, backSide}, "post")
        return res
    }

    static async startLearning(username, languageCode) {
        // const res = await axios.post(`${BASE_URL}/user/language/new`, { username, languageCode })
        // return res
        const res = await this.request(`user/language`, {username, languageCode}, "post")
        return res
    }

    static async quitLearning(username, languageCode) {
        // const res = await axios({
        //     method: 'DELETE',
        //     url: `${BASE_URL}/user/language/remove`,
        //     headers: { 'Content-type': 'application/json' },
        //     data:
        //         { 'username': username, 'languageCode': languageCode }
        // })

        // return res

        const res = await this.request(`user/language`, {username, languageCode}, "delete")
        return res

    }

    static async getUnits() {
        // const res = await axios.get(`${BASE_URL}/lesson/units`)
        // return res
        const res = await this.request(`lesson/units`)
        return res
    }

    static async getCompletedLessons(username, languageCode) {

        const res = await this.request(`lesson/units/lessons/completed?username=${username}&languageCode=${languageCode}`)
        return res
    }

    static async getLessonMaterials(languageCode, subUnit) {
        const res = await this.request(`lesson/translate?languageCode=${languageCode}&subUnit=${subUnit}`)
        return res
    }

    static async postExperience(username, experience) {
        const res = await this.request(`user/experience`, { username, experience }, "post")
        return res
    }

    static async completeLesson(username, languageCode, lessonId) {
        const res = await this.request(`lesson/complete`, { username, languageCode, lessonId }, "post")
        return res
    }

    static async deleteDeck(id) {

        const res = await this.request(`flashcards/deck`, {id}, "delete")
        return res

    }

    static async editDeck(id, name) {
        const res = await this.request(`flashcards/deck`, { id, name }, "patch")
        return res
    }

    static async deleteFlashCard(id) {

        const res = await this.request("flashcards", {id}, "delete")
        return res
    }

    static async editFlashCard(deckId, frontSide, backSide) {
        const res = await this.request(`flashcards`, { deckId, frontSide, backSide }, "patch")
        return res
    }

    static async editUser(username, data) {
        const res = await this.request(`user/${username}`, data, "patch")
        return res
    }

    static async changePassword(data) {
        const res = await this.request(`auth`, data, "patch")
        return res
    }

    static async translateWord(query, lang) {
        const res = await this.request(`translate?q=${query}&lang=${lang}`)
        return res
    }

}


export default API
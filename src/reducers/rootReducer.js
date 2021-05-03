import {ADD_ALL_LANGUAGES, LOAD_DECKS, LOAD_USER_LANGUAGES, LOAD_USER_INFO} from "../actions/actionTypes"
const INITIAL_STATE = {decks: [], allLanguages: [], userInfo: {}, userLanguages: []}
function rootReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case ADD_ALL_LANGUAGES:
            return { ...state,  allLanguages:action.payload }

        // case REMOVE_POST:

        //     return { ...state, posts: state.posts.filter(post => post.id !== action.payload.id), titles: state.titles.filter(title => title.id !== action.payload.id) }

        case LOAD_DECKS:
            return { ...state, decks: action.payload}
        case LOAD_USER_LANGUAGES:
            return { ...state, userLanguages: action.payload }

        // case EDIT_POST:
        //     const { description, body, title } = action.payload
        //     const posts = state.posts.map(post => {
        //         if (post.id === action.payload.id) {
        //             return { ...post, description, body, title }
        //         }
        //         return post
        //     })
        //     return { ...state, posts }

        case LOAD_USER_INFO:
            return { ...state, userInfo: action.payload }

        // case LOAD_FULL_POST:
        //     return { ...state, posts: [...state.posts, action.payload] }

        default:
            return state
    }
}

export default rootReducer
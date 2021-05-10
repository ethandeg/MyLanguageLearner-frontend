import { LOAD_SUBUNIT_DATA, LOAD_COMPLETED_LESSONS, LOAD_UNITS, QUIT_LEARNING, START_LEARNING, ADD_FLASH_CARD, LOAD_USER_TOKEN, REMOVE_USER_INFO, ADD_ALL_LANGUAGES, LOAD_DECKS, LOAD_USER_LANGUAGES, LOAD_USER_INFO, CREATE_NEW_DECK, LOAD_FLASH_CARDS } from "../actions/actionTypes"
const INITIAL_STATE = { decks: [], allLanguages: [], userInfo: {}, userLanguages: [], lessons: [] }
function rootReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case ADD_ALL_LANGUAGES:
            return { ...state, allLanguages: action.payload }


        case LOAD_DECKS:
            return { ...state, decks: action.payload }
        case LOAD_USER_LANGUAGES:
            return { ...state, userLanguages: action.payload }


        case LOAD_USER_INFO:
            return { ...state, userInfo: { ...action.payload, token: state.userInfo.token } }

        case LOAD_USER_TOKEN:
            return { ...state, userInfo: { ...state.userInfo, token: action.payload } }

        case REMOVE_USER_INFO:
            return { ...state, userInfo: INITIAL_STATE.userInfo, decks: INITIAL_STATE.decks, userLanguages: INITIAL_STATE.userLanguages }

        case CREATE_NEW_DECK:
            return { ...state, decks: [...state.decks, action.payload] }

        case LOAD_FLASH_CARDS:

            return {
                ...state, decks: state.decks.map(deck => {
                    if (deck.id === +action.deckId) {
                        return { ...deck, cards: action.payload }
                    }
                    return deck
                })
            }

        case ADD_FLASH_CARD:

            return {
                ...state, decks: state.decks.map(deck => {
                    if (deck.id === +action.deckId) {
                        return { ...deck, cards: [...deck.cards, action.payload] }
                    } else {
                        return deck
                    }
                })
            }

        case START_LEARNING:
            return { ...state, userLanguages: [...state.userLanguages, action.payload] }

        case QUIT_LEARNING:

            return { ...state, userLanguages: state.userLanguages.filter(lang => lang.languageCode !== action.payload) }


        case LOAD_UNITS:
            return { ...state, units: action.payload }

        case LOAD_COMPLETED_LESSONS:
            return {
                ...state, userLanguages: state.userLanguages.map(lang => {
                    if (lang.languageCode === action.languageCode) {
                        return { ...lang, completedLessons: action.lessonId }
                    }
                    return lang
                })
            }

        case LOAD_SUBUNIT_DATA:
            //initial api request has langCode and subUnit number
            //userLessons is the response from the api
            //will need langCode
            //userLessons state => 
            //{langCode:
                // subunitNumber:
                // material : [{seg, trans}]}
            return {...state, lessons: [...state.lessons, {languageCode: action.languageCode, subUnit: action.subUnit, material: action.payload}]}

        default:
            return state
    }
}

export default rootReducer
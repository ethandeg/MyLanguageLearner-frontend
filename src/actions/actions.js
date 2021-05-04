import { ADD_FLASH_CARD,LOAD_USER_TOKEN, REMOVE_USER_INFO, ADD_ALL_LANGUAGES, LOAD_DECKS, LOAD_USER_LANGUAGES, LOAD_USER_INFO, CREATE_NEW_DECK, LOAD_FLASH_CARDS } from "./actionTypes"
import API from "../API"
export function loadLanguages() {
    return async function (dispatch) {
        const res = await API.getLanguages()
        dispatch(loadLanguagesDispatch(res.data))
    }
}

function loadLanguagesDispatch(payload) {

    return {
        type: ADD_ALL_LANGUAGES,
        payload,
    }
}

export function loadUserData(uName) {
    return async function (dispatch) {
        const res = await API.getUserInfo(uName)
        dispatch(loadDeckDispatch(res.data.deck))
        dispatch(loadUserLanguageDataDispatch(res.data.languages))
        const { username, experience, profilePic } = res.data
        dispatch(loadUserDataDispatch({ username, experience, profilePic }))
    }
}



function loadDeckDispatch(payload) {
    return {
        type: LOAD_DECKS,
        payload,
    }
}

function loadUserLanguageDataDispatch(payload) {
    return {
        type: LOAD_USER_LANGUAGES,
        payload
    }
}


function loadUserDataDispatch(payload) {
    return {
        type: LOAD_USER_INFO,
        payload
    }
}


export function removeUserInfo() {
    return async function (dispatch) {
        dispatch(removeUserInfoDispatch())
    }
}

function removeUserInfoDispatch() {
    return {
        type: REMOVE_USER_INFO
    }
}

export function loadUserToken(token) {
    return async function (dispatch) {
        dispatch(loadUserTokenDispatch(token))
    }
}

function loadUserTokenDispatch(token) {
    return {
        type: LOAD_USER_TOKEN,
        payload: token
    }
}

export function createNewDeck(username, name) {
    return async function (dispatch) {
        const { data } = await API.createDeck(username, name)
        dispatch(createNewDeckDispatch(data.id, data.name))
    }
}

function createNewDeckDispatch(id, name) {
    return {
        type: CREATE_NEW_DECK,
        payload: { id, name }
    }
}

export function getFlashCards(deckId) {
    return async function (dispatch) {
        const { data } = await API.getDeck(deckId)
        dispatch(getFlashCardsDispatch(data, deckId))
    }
}

function getFlashCardsDispatch(payload, deckId) {
    return {
        type: LOAD_FLASH_CARDS,
        payload,
        deckId
    }
}

export function addFlashCard(deckId, frontSide, backSide){
    console.log(deckId, frontSide, backSide)
    return async function(dispatch){
        const {data} = await API.createFlashCard(deckId, frontSide, backSide)
        dispatch(addFlashCardDispatch(data.deckId,data.id, data.frontSide, data.backSide))
    }
}

function addFlashCardDispatch(deckId, id, frontSide, backSide){
    return {
        type: ADD_FLASH_CARD,
        payload: {id, frontSide, backSide},
        deckId
    }
}
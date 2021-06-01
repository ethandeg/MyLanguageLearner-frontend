import 'bulma/css/bulma.css'
import Nav from "./routesAndNav/Nav"
import { loadLanguages, loadUserData, removeUserInfo, loadUserToken } from "./actions/actions"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import API from "./API"
import Routes from "./routesAndNav/Routes"
import jwt from "jsonwebtoken"
import './App.css';
import Footer from "./Footer"
import useTimedMessage from "./hooks/useTimedMessage"




function App() {
  const TOKEN_STORAGE_ID = 'token'
  const [msgFlag, setMsgFlag] = useTimedMessage();
  //check local storage for token
  const findLocalStorage = (key) => {
    const item = localStorage.getItem(key);
    return item
  }

  const removeLocalStorage = key => {
    localStorage.removeItem(key)
  }
  //if token, the load user data with that token
  //loading - get username from token, send to api for to get full user info
  //maybe have userData require a username, which it will get from decoding token

  // ideal flow : user visits page => finds token in store => decodes token => gets userInfo from api => saves userInfo w/ token in redux, saves token to API.token
  //              user visits page => does not find token, loads languages from api, but no user info, loadingComplete=true
  const [isLoaded, setIsLoaded] = useState(false)
  const dispatch = useDispatch()
  useEffect(() => {
    const token = findLocalStorage(TOKEN_STORAGE_ID)
    dispatch(loadLanguages())
    if (token) {
      try {
        const { username } = jwt.decode(token)
        if(username){
          dispatch(loadUserData(username))
          dispatch(loadUserToken(token))
          API.token = token
        }
      } catch(e){
        removeLocalStorage(TOKEN_STORAGE_ID)
      }

    }

    setIsLoaded(true)
  }, [dispatch])


  const login = async (userData) => {
    try {
      const res = await API.login(userData)
      if(res.data.error) throw new Error(res.data.error.message)
      //dispatch from the res, so it doesn't needlessly ping the server?
      dispatch(loadUserData(userData.username))
      dispatch(loadUserToken(res.data._token))
      return res
    } catch (e) {
      return e
    }


  }

  const register = async (userData) => {
    try {
      const res = await API.register(userData)
      dispatch(loadUserData(userData.username))
      dispatch(loadUserToken(res.data._token))
      return res
    } catch (e) {
      return e
    }
  }

  const logout = () => {
    removeLocalStorage(TOKEN_STORAGE_ID)
    //empty user info from redux
    dispatch(removeUserInfo())
    API.token = null
  }

  if (!isLoaded) {
    return <h1>Loading....</h1>
  }
  // https://stackoverflow.com/questions/43727032/hero-footer-not-at-bottom-of-page
  return (
    <>
      <Nav logout={logout} />

        <Routes login={login} register={register} />
        <Footer/>

    </>
  );
}

export default App;

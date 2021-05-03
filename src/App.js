import logo from './logo.svg';
import Nav from "./Nav"
import { loadLanguages, loadUserData } from "./actions/actions"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import API from "./API"
import Routes from "./Routes"
import jwt from "jsonwebtoken"
function App() {

  //check local storage for token
  const findLocalStorage = (key) => {
    const item = localStorage.getItem(key);
    return item
  }
  //if token, the load user data with that token
  //loading - get username from token, send to api for to get full user info
  //maybe have userData require a username, which it will get from decoding token

// ideal flow : user visits page => finds token in store => decodes token => gets userInfo from api => saves userInfo w/ token in redux, saves token to API.token
//              user visits page => does not find token, loads languages from api, but no user info, loadingComplete=true
  const [isLoaded, setIsLoaded] = useState(false)
  const dispatch = useDispatch()
  useEffect(() => {
    const token = findLocalStorage('token')

    dispatch(loadLanguages())
    if(token){
      const {username} = jwt.decode(token)
      dispatch(loadUserData(username))
    }

    setIsLoaded(true)
  }, [dispatch])

  if (!isLoaded) {
    return <h1>Loading....</h1>
  }
  return (
    <>
      <Nav />
      <Routes />
    </>
  );
}

export default App;

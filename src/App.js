import logo from './logo.svg';
import Nav from "./Nav"
import { loadLanguages, loadUserData } from "./actions/actions"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import API from "./API"
import Routes from "./Routes"

function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadLanguages())
    dispatch(loadUserData())
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

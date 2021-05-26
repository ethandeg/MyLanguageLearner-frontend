import {useSelector} from "react-redux"
import HomeUser from "./HomeUser"
import HomeNoUser from "./HomeNoUser"
const Home = () => {
    const {token} = useSelector(state => state.userInfo)
    if(token){
        return <HomeUser />
    }
    return <HomeNoUser />
}

export default Home
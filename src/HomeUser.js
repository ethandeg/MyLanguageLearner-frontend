import {useSelector} from "react-redux"
const HomeUser = () => {
    const user = useSelector(state => state.userInfo)
    return (
        <h1>Hello, {user.username}!</h1>
    )
}

export default HomeUser
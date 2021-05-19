import {NavLink} from "react-router-dom"
import ProfileTabs from "./ProfileTabs"
const ProfileEdit = () => {
    //have this tab be a sepearte component
    //have each tab route to a different component, with a NavLink?
    //give each one it's own route in route file
    return (
        <ProfileTabs active="Languages"/>

    )
}


export default ProfileEdit
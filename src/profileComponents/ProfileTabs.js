import Tabs from "../utilityComponents/Tabs"
const ProfileTabs = ({active}) => {
    const titles = ["Decks", "Flashcards", "Languages"]
    const BASE_URL = "/profile/edit"
    return (
        <>
        <Tabs active={active} titles={titles} BASE_URL={BASE_URL}/>
        </>
    )

}

export default ProfileTabs
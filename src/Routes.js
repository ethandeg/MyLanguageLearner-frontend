import { Switch, Route } from "react-router-dom"
import LanguageList from "./languageComponents/LanguageList"
import Decks from "./decksAndFlashcards/Decks"
import AuthForm from "./authForms/AuthForm"
import Home from "./Home"
import DeckPreview from "./decksAndFlashcards/DeckPreview"
import DeckLearn from "./decksAndFlashcards/DeckLearn"
import Learn from "./unitComponents/Learn"
import SubUnit from "./unitComponents/SubUnit"
import Profile from "./profileComponents/Profile"
import ProfileEdit from "./profileComponents/ProfileEdit"


const Routes = ({ login, register, logout }) => {
    return (
        <Switch>
            <Route exact path="/"> <Home /></Route>
            <Route exact path ="/profile"> <Profile /></Route>
            <Route exact path ="/profile/edit"> <ProfileEdit /></Route>
            <Route exact path="/languages"> <LanguageList /></Route>
            <Route exact path="/decks"> <Decks /></Route>
            <Route exact path="/decks/:id"> <DeckPreview /></Route>
            <Route exact path="/decks/:deckId/learn"> <DeckLearn /></Route>
            <Route exact path="/learn/:languageCode"> <Learn /></Route>
            <Route exact path="/learn/:languageCode/:subUnit"> <SubUnit /></Route>
            <Route exact path="/register"> <AuthForm submit={register} /></Route>
            <Route exact path="/login"> <AuthForm submit={login} /></Route>
        </Switch>
    )
}

export default Routes
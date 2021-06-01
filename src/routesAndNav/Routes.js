import { Switch, Route } from "react-router-dom"
import LanguageList from "../languageComponents/LanguageList"
import Decks from "../decksAndFlashcards/Decks"
import AuthForm from "../authForms/AuthForm"
import Home from "../Home"
import DeckPreview from "../decksAndFlashcards/DeckPreview"
import DeckLearn from "../decksAndFlashcards/DeckLearn"
import Learn from "../unitComponents/Learn"
import SubUnit from "../unitComponents/SubUnit"
import Profile from "../profileComponents/Profile"
import Secret from "../Secret"
import PrivateRoute from "./PrivateRoute"
import LoggedOutRoute from "./LoggedOutRoute"

const Routes = ({ login, register }) => {
    return (
        <Switch>
            <Route exact path="/"> <Home /></Route>
            <PrivateRoute exact path ="/profile"> <Profile /></PrivateRoute>
            <PrivateRoute exact path="/languages"> <LanguageList /></PrivateRoute>
            <PrivateRoute exact path="/decks"> <Decks /></PrivateRoute>
            <Route exact path="/decks/:id"> <DeckPreview /></Route>
            <Route exact path="/decks/:deckId/learn"> <DeckLearn /></Route>
            <PrivateRoute exact path="/learn/:languageCode"> <Learn /></PrivateRoute>
            <PrivateRoute exact path="/learn/:languageCode/:subUnit"> <SubUnit /></PrivateRoute>
            <LoggedOutRoute exact path="/register"> <AuthForm submit={register} type="register"/></LoggedOutRoute>
            <LoggedOutRoute exact path="/login"> <AuthForm submit={login} type="login"/></LoggedOutRoute>
            <PrivateRoute exact path ="/secret"> <Secret /></PrivateRoute>
        </Switch>
    )
}

export default Routes
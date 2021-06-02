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

const Routes = ({ login, register, timer, message }) => {
    return (
        <Switch>
            <Route exact path="/"> <Home /></Route>
            <PrivateRoute exact path ="/profile"> <Profile timer={timer} message={message}/></PrivateRoute>
            <PrivateRoute exact path="/languages"> <LanguageList timer={timer} message={message}/></PrivateRoute>
            <PrivateRoute exact path="/decks"> <Decks timer={timer} message={message}/></PrivateRoute>
            <Route exact path="/decks/:id"> <DeckPreview timer={timer} message={message}/></Route>
            <Route exact path="/decks/:deckId/learn"> <DeckLearn /></Route>
            <PrivateRoute exact path="/learn/:languageCode"> <Learn /></PrivateRoute>
            <PrivateRoute exact path="/learn/:languageCode/:subUnit"> <SubUnit timer={timer} message={message}/></PrivateRoute>
            <LoggedOutRoute exact path="/register"> <AuthForm submit={register} type="register" timer={timer} message={message}/></LoggedOutRoute>
            <LoggedOutRoute exact path="/login"> <AuthForm submit={login} type="login" timer={timer} message={message}/></LoggedOutRoute>
            <PrivateRoute exact path ="/secret"> <Secret timer={timer} message={message} /></PrivateRoute>
        </Switch>
    )
}

export default Routes
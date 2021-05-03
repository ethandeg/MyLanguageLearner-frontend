import { Switch, Route } from "react-router-dom"
import LanguageList from "./LanguageList"
import Decks from "./Decks"
import AuthForm from "./authForms/AuthForm"
const Routes = ({login, register, logout}) => {
    return (
        <Switch>
            <Route exact path="/languages"> <LanguageList /></Route>
            <Route exact path="/decks"> <Decks /></Route>
            <Route exact path="/register"> <AuthForm submit={register}/></Route>
            <Route exact path="/login"> <AuthForm submit={login}/></Route>
        </Switch>
    )
}

export default Routes
import { Switch, Route } from "react-router-dom"
import LanguageList from "./LanguageList"
import Decks from "./Decks"
import AuthForm from "./authForms/AuthForm"
const Routes = () => {
    return (
        <Switch>
            <Route exact path="/languages"> <LanguageList /></Route>
            <Route exact path="/decks"> <Decks /></Route>
            <Route exact path="/register"> <AuthForm /></Route>
        </Switch>
    )
}

export default Routes
import {Switch, Route} from "react-router-dom"
import LanguageList from "./LanguageList"
import Decks from "./Decks"
const Routes = () => {
    return (
        <Switch>
            <Route exact path="/languages"> <LanguageList /></Route>
            <Route exact path ="/decks"> <Decks /></Route>
        </Switch>
    )
}

export default Routes
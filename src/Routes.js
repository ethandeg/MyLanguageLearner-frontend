import {Switch, Route} from "react-router-dom"
import LanguageList from "./LanguageList"

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/languages"> <LanguageList /></Route>
        </Switch>
    )
}

export default Routes
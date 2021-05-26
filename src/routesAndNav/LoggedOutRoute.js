import {useSelector} from "react-redux"
import { Route, Redirect } from "react-router-dom"
const LoggedOutRoute = ({exact, path, children}) => {
    const token = useSelector(state => state.userInfo.token)

    if(token) {
        return <Redirect to="/" />
    }
    return (
        <Route exact={exact} path={path}>
          {children}
        </Route>
      );
}

export default LoggedOutRoute
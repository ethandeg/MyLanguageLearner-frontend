import {useSelector} from "react-redux"
import { Route, Redirect } from "react-router-dom"

const PrivateRoute = ({exact, path, children}) => {
    const token = useSelector(state => state.userInfo.token)

    if(!token) {
        return <Redirect to="/login" />
    }
    return (
        <Route exact={exact} path={path}>
          {children}
        </Route>
      );

}

export default PrivateRoute
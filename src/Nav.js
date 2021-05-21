import { useSelector } from "react-redux"
import { NavLink, Link, useHistory } from "react-router-dom"

const Nav = ({ logout }) => {
    const history = useHistory()
    const handleLogout = () => {
        logout()
        history.push("/")
    }
    const token = useSelector(store => store.userInfo.token)

    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="container">
                <div className="navbar-brand">
                    <NavLink className="navbar-item" to="/">
                        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
                    </NavLink>
                    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        <NavLink className="navbar-item" to="/languages">
                            Languages
                    </NavLink>
                        <NavLink className="navbar-item" to="/decks">
                            Decks
                    </NavLink>
                    </div>
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                {token ?
                                    <>
                                        <button onClick={handleLogout} className="button is-danger">
                                            <strong>Sign Out</strong>
                                        </button>
                                        <NavLink className="navbar-item" to="/profile">Profile</NavLink>
                                    </>
                                    :

                                    <>
                                        <Link className="button is-primary" to='/register'>
                                            <strong>Sign up</strong>
                                        </Link>
                                        <Link className="button is-light" to="/login">
                                            <strong>Log in</strong>
                                        </Link>
                                    </>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

    )
}


export default Nav
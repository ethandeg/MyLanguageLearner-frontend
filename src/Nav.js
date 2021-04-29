import {NavLink} from "react-router-dom"
const Nav = () => {
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
                    <NavLink className="navbar-item" to="/">
                        Flash Cards
                    </NavLink>
                </div>
            <div className="navbar-end">
                <div className="navbar-item">
                    <div className="buttons">
                        <a className="button is-primary">
                            <strong>Sign up</strong>
                        </a>
                        <a className="button is-light">
                            <strong>Log in</strong>
                        </a>
                    </div>
                </div>
            </div>
            </div>
            </div>
        </nav>
        
    )
}


export default Nav
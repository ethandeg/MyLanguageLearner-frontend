import { useSelector } from "react-redux"
import { NavLink, Link, useHistory } from "react-router-dom"
import {useState} from "react"

const Nav = ({ logout }) => {
    const [active, setActive] = useState(false)
    const history = useHistory()
    const handleLogout = () => {
        logout()
        history.push("/")
    }
    const {token} = useSelector(store => store.userInfo)
    let {profilePic} = useSelector(store => store.userInfo) || "https://www.nacdnet.org/wp-content/uploads/2016/06/person-placeholder.jpg"
    profilePic = profilePic ? profilePic : "https://www.nacdnet.org/wp-content/uploads/2016/06/person-placeholder.jpg"
    const changeActive = () => {
        if(active){
            setActive(false)
        } else {
            setActive(true)
        }
    }
    const classNames = active ? "is-active" : undefined;
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="container">
                <div className="navbar-brand">
                    <NavLink className="navbar-item" to="/">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1200px-Logo_NIKE.svg.png" width="112" height="28" alt="MyLanguageLearner"/>
                    </NavLink>
                    <button onClick={changeActive} className={`navbar-burger ${classNames}`} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </button>
                </div>
                <div id="navbarBasicExample" className={`navbar-menu ${classNames}`}>
                    <div className="navbar-start">

                    {token &&
                    <>
                                 <NavLink className="navbar-item" to="/languages">
                                            Languages
                                </NavLink>
                        <NavLink className="navbar-item" to="/decks">
                        Decks
                        </NavLink>       
                        </>             
                    }

                    </div>
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                {token ?
                                    <>
                                        <button onClick={handleLogout} className="button is-danger">
                                            <strong>Sign Out</strong>
                                        </button>

                                        <NavLink to="/profile">
                                            <figure className="image is-64x64 pt-4">
                                            
                                            <img src={profilePic} alt=""/>
                                            </figure>
                                        </NavLink>
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
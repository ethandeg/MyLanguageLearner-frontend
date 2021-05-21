import { Link } from "react-router-dom"
const Footer = () => {
    return (
        <footer class="footer">
            <div className="container">
                <div className="columns">
                    <div className="column is-half">
                        <div className="content is-medium">
                            <h6>My Language Learner</h6>
                            <hr></hr>
                            <p>
                                <Link to="/languages">Languages</Link>
                            </p>
                            <p>
                                <Link to="/decks">Decks</Link>
                            </p>
                            <p>
                                <Link to="/decks">Login</Link>
                            </p>
                            <p>
                                <Link to="/decks">Register</Link>
                            </p>
                        </div>

                    </div>

                    <div className="column is-half">
                        <div className="content is-medium">
                            <h6>Creation</h6>
                            <hr />
                            <p className="">This app was made with the following technology stack:</p>
                            <ul className="content is-small">
                                <li>NodeJS</li>
                                <li>Express</li>
                                <li>React</li>
                                <li>Redux</li>
                                <li>Bulma CSS</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    )
}


export default Footer
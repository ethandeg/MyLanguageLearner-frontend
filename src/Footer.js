
const Footer = () => {
    return (
        <footer className="footer" >
            <div className="container">
                <div className="columns">
                    <div className="column is-half">
                        <div className="content is-medium">
                            <h6>My Language Learner</h6>
                            <hr></hr>
                            <p>Designed, Coded, and Created by Ethan Degenhardt</p>
                            <p>ethandeg1996@gmail.com</p>
                            <p>(636) 373-3435</p>
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
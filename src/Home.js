import "./Home.css"
import { Link } from "react-router-dom"
const Home = () => {
    return (
        <>
            <section className="hero is-primary is-halfheight">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <div className="mb-4">
                            <h1 className="title is-1">My Language Learner</h1>
                        </div>
                        <h2 className="subtitle is-4">Your One-Stop Shop Language Preperation Tool for Traveling</h2>
                        <div className="mt-6">
                            <button className="button is-warning is-light is-outlined mr-1">Get Started</button>
                            <button className="button is-info is-light is-outlined ml-1">See more first</button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="hero is-secondary mb-6">
                <h3 className="title is-2 has-text-centered has-text-info mt-5 is-uppercase">Our method works!</h3>

                <div className="columns mt-6">
                    <div className="column is-half hero is-link p-6 box">
                        <div className="content is-medium">
                            <p>
                                My Language Learner is a one-stop shop for learning your neccessary travel phrases and beyond so that you can fully enjoy your trip.
                                Our method is inspired from multiple well-known language learning apps, melded into one to compliment the strengths of each, whilst not
                                wasting time on the less productive stuff. Our method teaches you a language the same way you learned your native language. In lexical chunks!
                                This means instead of simply learning a word and a lot of grammar, you memorize complete phrases, which trains your mind to think like a native.
                                Good luck!
                            </p>
                        </div>

                    </div>
                    <div className="column is-half">
                        <ul className="progressbar">
                            <li className="active">Create an Account</li>
                            <li className="active">Choose a Language</li>
                            <li className="active">Study the Units</li>
                            <li className="active">Circle back with Flashcards</li>
                        </ul>
                        <div className="content is-medium box py-6" style={{ marginTop: "9%" }}>
                            <p>
                                Our system is designed for learners of any level. You feel as though your memory isn't as good and you need constant refreshers? No problem,
                                use our smart systems easy flashcard creater, or redo old lessons. maybe you are a quick learner? well no problem, we have many units to offer as well
                                as a unit creation wizard for learners wanting to go in-depth in a particular concept
                            </p>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}


export default Home
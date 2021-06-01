import "./Home.css"
import { Link } from "react-router-dom"
import {useSelector} from "react-redux"
import LanguageIcon from "./languageComponents/LanguageIcon"
const Home = () => {
    const languages = useSelector(state => state.allLanguages)
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
                            <Link to="/register" className="button is-warning is-light is-outlined mr-1">Get Started</Link>
                            <a href="#how-works" className="button is-info is-light is-outlined ml-1">See more first</a>
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

            <section className="hero is-primary my-6" id="how-works">
                <h3 className="title is-uppercase is-2 has-text-secondary has-text-centered">How it works.</h3>
                <div className="columns content is-medium p-6">
                    
                    <div className="column">
                    <h4 className="title has-text-secondary has-text-centered is-3">Learn Target to English Language</h4>
                        <p>This will be your first exposure to the word, so it is important to read it in your target language first. Try to make inferences on what the word can means
                            Once you have made your guess, flip the card and check the answer. Try to notice patterns, roots, etc.. This will make you a better language learner.
                        </p>
                    </div>
                    <div className="column">
                    <h4 className="title has-text-secondary has-text-centered is-3">Know English to Target Language</h4>
                        <p>Now it is important to recall the word. On the second rotation you will be shown the english word. Guess out loud the word in your target langauge. 
                            It is important to always speak your target language even when only reading. Now flip it, were you right? 
                        </p>
                    </div>
                    <div className="column">
                    <h4 className="title has-text-secondary has-text-centered is-3">Type in Target Language from English</h4>
                        <p>Once you are ready to move on to the final rotation, you will be shown the word in English, and have to type in the answer in your target language.
                            Luckily, our smart technology can handle small typos in your answer and will ask you if you got it right or if you didn't know the answer. Once this is over, you will earn exp for each right answer.
                            Now it is time to level up and repeat!
                        </p>
                    </div>
                </div>
            </section>

        <section className="hero is-secondary mb-6">
            <h1 className="title is-3 has-text-info has-text-centered">See Our large selection of languages!</h1>

                <div className="columns is-multiline is-mobile">
                
                {languages.map(lang => (
                    <div key={lang.code} className="column is-half-mobile is-one-third-tablet is-one-quarter-desktop is-one-fifth-widescreen">
                <LanguageIcon language={lang}  />
                </div>
                    ))}

                </div>




        </section>

        </>
    )
}


export default Home
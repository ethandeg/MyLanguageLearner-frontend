import {useSelector} from "react-redux"
import LanguageIcon from "./languageComponents/LanguageIcon"
import {Link} from "react-router-dom"
import Deck from "./decksAndFlashcards/Deck"
const HomeUser = () => {
    const user = useSelector(state => state.userInfo)
    const userLanguages = useSelector(state => state.userLanguages.map(lang => lang.languageCode))
    const userAraryLanguages = useSelector(state => state.allLanguages.filter(lang => userLanguages.includes(lang.code)))
    const decks = useSelector(state => state.decks)
    return (
        <>
        <section className="hero is-medium has-text-centered is-primary">
            <div className="hero-body">
                <h1 className="title has-text-secondary">Welcome {user.username}</h1>
            </div>
            
        </section>

        <section className="my-6 hero is-small is-secondary has-text-centered">
            <div className="hero-body">
                <h2 className="title has-text-primary">Let's get back to learning!</h2>
            </div>
        </section>
        <div className="container">
        <section className="hero is-info mt-6 pb-6 px-6">
            <div className="hero-body">
                <h3 className="has-text-centered has-text-secondary title is-4">Your Languages</h3>
            </div>
            <div className="columns is-multiline">
                {userAraryLanguages.length ?
                                userAraryLanguages.map(lang => (
                    
                                    <div className="column is-one-third" key={lang.code}>
                                        <LanguageIcon language={lang}>
                                            <Link to={`/learn/${lang.code}`} className="button is-light is-info">Go</Link>
                                        </LanguageIcon>
                                    </div>
                                ))
                :
                <>
                <div className="column"></div>
                <div className="column"><h4 className="title is-5 has-text-centered has-text-warning"><Link to="/languages">You aren't learning any languages...Click here to change that!</Link></h4></div>
                <div className="column"></div>
                </>
                }
    


        </div>

        </section>
        </div>

        <section className="mb-6 has-background-primary">
            <div className="hero-body">
                <h3 className="has-text-white has-text-centered title is-4">Decks</h3>
                <div className="columns is-multiline">
                    {decks.length ?
                                      decks.map(deck => (

                                        <div className="column is-one-third" key={deck.id}>
                                            <Deck deck={deck} />
                                        </div>
                    
                                        ))
                    :
                    <>
                    <div className="column"></div>
                    <div className="column"> <h4 className="has-text-centered has-text-secondary title is-5"><Link to="/decks">You don't have any decks..Want to create some?</Link></h4></div>
                    <div className="column"></div>
                   </>
                    }
  
                    </div>
            </div>
            
        </section>


        </>
    )
}

export default HomeUser
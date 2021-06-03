import {Link} from "react-router-dom"
import {useParams} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import {useEffect, useState} from "react"
import {getFlashCards} from "../actions/actions"
import FlashCard from "./FlashCard"
import LoadingScreen from "../utilityComponents/LoadingScreen"
const DeckLearn = () => {
    const {deckId} = useParams()
    const dispatch = useDispatch()
    const decks = useSelector(state => state.decks)
    const deck = decks.find(d => d.id === +deckId) || undefined
    const [cardNumber, setCardNumber] = useState(0)
    const changeCard = () => {
        setCardNumber(cardNumber + 1)
    }
    const startOver = () => {
        setCardNumber(0)
    }
    useEffect(() => {
        if (deck && !deck.cards) {
            dispatch(getFlashCards(deckId))
        }
    
    }, [deckId, deck, dispatch])


    try {
        if(!deck.cards.length) return (
            <div className="container mt-6 p-6">
            <div className="columns is-centered">

                <h2 className="title has-text-info is-3">You Don't Have Any Cards in This Deck!</h2>
                <div>
                <Link to={`/decks/${deck.id}`} className="button is-info is-pulled-left ml-2">Create Some</Link>
                </div>
               
                    
            </div>                    
        </div> 
        )
        return (
            <div className="container mt-6 p-6">
                
                    {deck && deck.cards[cardNumber] ?
                    <div className="columns">
                        <div className="column is-one-quarter"></div>

                    <div className="column is-half">
                    <FlashCard key={deck.cards[cardNumber].id} card={deck.cards[cardNumber]}/>
                    <button className="button is-primary is-pulled-right mr-2" onClick={changeCard}>Next</button>
                    <button className="button is-info is-pulled-left ml-2" onClick={startOver}>Start Over</button>
                    </div>
                    <div className="column is-one-quarter"></div>
                    </div>                  
                    :
                    <div className="container">
                        <div className="columns is-centered">

                            <h2 className="title has-text-info is-3">You Have Finished Studying!</h2>
                            <button className="button is-info is-pulled-left ml-2" onClick={startOver}>Start Over</button>
                            <Link to={`/decks/${deck.id}`} className="button is-primary is-outlined is-pulled-left ml-2">Go back to {deck.name}</Link>
                                
                        </div>                    
                    </div>
                    }
                    

            </div>
        )
    } catch (e){
        return <LoadingScreen />
    }
}



export default DeckLearn





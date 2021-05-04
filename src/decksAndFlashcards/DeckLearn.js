//userflow - 
//route comes here with a dedicated deck id
//ping for flashcards, and map through all of them creating them
//show one on page at a time, and allow to flip the card
//once done, display a button to start over or exit
//how to make carosel - https://www.w3schools.com/howto/howto_js_slideshow.asp
import {useParams} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import {useEffect, useState} from "react"
import {getFlashCards} from "../actions/actions"
import FlashCard from "./FlashCard"
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
        return (
            <div className="container mt-6 p-6">
                    {deck && deck.cards[cardNumber] ?
                    <>
                    <FlashCard key={deck.cards[cardNumber].id} card={deck.cards[cardNumber]}/>
                    <button className="button is-primary is-pulled-right mr-2" onClick={changeCard}>Next</button>
                    <button className="button is-info is-pulled-left ml-2" onClick={startOver}>Start Over</button>
                    </>                  
                    :
                    <div className="container">
                        <div className="columns is-centered">

                            <h2 className="title has-text-info is-3">You Have Finished Studying!</h2>
                            <button className="button is-info is-pulled-left ml-2" onClick={startOver}>Start Over</button>
                                
                        </div>                    
                    </div>
                    }

            </div>
        )
    } catch (e){
        return <p>Loading...</p>
    }
}



export default DeckLearn





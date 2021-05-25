import { useParams, Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getFlashCards } from "../actions/actions"
import { useEffect } from "react"
import FlashCardPreview from "./FlashCardPreview"
import NewFlashCardForm from "../authForms/NewFlashCardForm"
import {addFlashCard} from "../actions/actions"
import OneInputForm from "../authForms/OneInputForm"
const DeckPreview = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const decks = useSelector(state => state.decks)
    const deck = decks.find(d => d.id === +id) || undefined
    const addCard = (id, front , back) => {
        dispatch(addFlashCard(+id, front, back))
        //error, isn't saving card id to redux
        //redux cards have snake case, added ones have camel
    }
 
    useEffect(() => {
        if (deck && !deck.cards) {
            dispatch(getFlashCards(id))
        }

    }, [id, deck, dispatch])

    try {
        return (
            <>


                <div className="container mt-6">
                <h1 className="title is-3 has-text-primary">{deck.name}</h1>
                    <Link className="button is-primary is-outlined" to={`/decks/${deck.id}/learn`}>Start Learning!</Link>
                    
                    <div className="columns">
                    <div className="column">
                        <NewFlashCardForm submit={addCard} deckId={id}/>
                    </div>
                    <div className="column"></div>

                    <div className="column"></div>
                </div>
                    <div className="columns is-multiline mt-6">
                        {deck && deck.cards.map(card => (
                            <FlashCardPreview key ={card.id} card={card}/>
                        ))}
                    </div>
                </div>


            </>
        )
    } catch (e){
        return <p>Loading...</p>
    }

}

export default DeckPreview
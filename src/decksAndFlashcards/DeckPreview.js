import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getFlashCards } from "../actions/actions"
import { useEffect } from "react"
import FlashCardPreview from "./FlashCardPreview"
const DeckPreview = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const decks = useSelector(state => state.decks)
    const deck = decks.find(d => d.id === +id) || undefined
 
    useEffect(() => {
        if (deck && !deck.cards) {
            dispatch(getFlashCards(id))
        }

    }, [id, deck])

    try {
        return (
            <>
                <h1>Hello From Deck Preview id:{id}</h1>
                <div className="container mt-6">
                    <div className="columns is-multiline">
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
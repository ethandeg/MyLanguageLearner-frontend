//userflow - 
//route comes here with a dedicated deck id
//ping for flashcards, and map through all of them creating them
//show one on page at a time, and allow to flip the card
//once done, display a button to start over or exit
//how to make carosel - https://www.w3schools.com/howto/howto_js_slideshow.asp
import {useParams} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import {useEffect} from "react"
import {getFlashCards} from "../actions/actions"
import FlashCard from "./FlashCard"
const DeckLearn = () => {
    const {deckId} = useParams()
    const dispatch = useDispatch()
    const decks = useSelector(state => state.decks)
    const deck = decks.find(d => d.id === +deckId) || undefined
    useEffect(() => {
        if (deck && !deck.cards) {
            dispatch(getFlashCards(deckId))
        }
    
    }, [deckId, deck, dispatch])


    try {
        return (
            <div className="container mt-6">
                <div className="columns is-multiline">
                    {deck && deck.cards.map(card => (
                        <FlashCard key={card.id} card={card}/>
                    ))}
                </div>
            </div>
        )
    } catch (e){
        return <p>Loading...</p>
    }
}



export default DeckLearn


// const dispatch = useDispatch()
// const { id } = useParams()
// const decks = useSelector(state => state.decks)
// const deck = decks.find(d => d.id === +id) || undefined

// useEffect(() => {
//     if (deck && !deck.cards) {
//         dispatch(getFlashCards(id))
//     }

// }, [id, deck])

// try {
//     return (
//         <>
//             <h1>Hello From Deck Preview id:{id}</h1>
//             <div className="container mt-6">
//                 <div className="columns is-multiline">
//                     {deck && deck.cards.map(card => (
//                         <FlashCardPreview key ={card.id} card={card}/>
//                     ))}
//                 </div>
//             </div>

//         </>
//     )
// } catch (e){
//     return <p>Loading...</p>
// }

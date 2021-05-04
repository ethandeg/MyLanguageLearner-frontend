import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getFlashCards, loadUserToken } from "../actions/actions"
import { useEffect } from "react"
const DeckPreview = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const deck = useSelector(state => state.decks)
    useEffect(() => {
        if (!deck.cards) {
            dispatch(getFlashCards(id))
        }

    }, [id])

    return (
        <>
            <h1>Hello From Deck Preview id:{id}</h1>
        </>
    )
}

export default DeckPreview
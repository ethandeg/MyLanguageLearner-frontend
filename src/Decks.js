import {useSelector} from "react-redux"
const Decks = () => {
    const decks = useSelector(store => store.decks)
    return (
        <>
        <h1>Hello from decks!</h1>
        {decks.length ? decks.map(deck => (
            <li key={deck.id}>{deck.name}</li>
        )):<p>You don't have any flashcard decks yet</p>}
        </>
    )
}

export default Decks
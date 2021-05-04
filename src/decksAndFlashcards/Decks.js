import { useSelector } from "react-redux"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { createNewDeck } from "../actions/actions"
import Deck from "./Deck"
const Decks = () => {
    const decks = useSelector(store => store.decks)
    const user = useSelector(store => store.userInfo)
    const dispatch = useDispatch()
    const INITIAL_STATE = { name: '' }
    const [formData, setFormData] = useState(INITIAL_STATE)
    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(createNewDeck(user.username, formData.name))
        setFormData(INITIAL_STATE)
    }
    return (
        <div className="container">
            <h1 className="is-secondary title-1">Your Decks</h1>
            <div className="columns mt-6 is-multiline">
                {decks.length ? decks.map(deck => (
                    <Deck key={deck.id} deck={deck} />
                )) : <p>You don't have any flashcard decks yet</p>}
            </div>
            {user.username &&
                <form className="box mt-6" onSubmit={handleSubmit}>
                    <div className="field">
                        <label className="label">Deck Name</label>
                        <div className="control">
                            <input className="input" type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
                        </div>
                    </div>

                    <button className="button is-primary">+</button>
                </form>
            }

        </div>
    )
}

export default Decks
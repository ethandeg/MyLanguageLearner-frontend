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
        <div className="container mb-6">
            <h1 className="title is-2 has-text-centered has-text-primary mt-5">Your Decks</h1>
            {user.username &&
                <div className="columns">
                    <div className="column"></div>
                    <div className="column is-one-third">

                        <form className="box mt-6" onSubmit={handleSubmit}>
                            <h3 className="title has-text-centered is-5 has-text-primary">Add a new deck</h3>
                            <div class="field has-addons is-centered" style={{ marginLeft: "21%" }}>
                                <div class="control">

                                    <input className="input" type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
                                </div>
                                <div class="control">
                                    <button class="button is-info">
                                        +
                                    </button>
                                </div>
                            </div>

                        </form>
                    </div>
                    <div className="column"></div>
                </div>

            }
            {/* break off into a seperate component, have flashcards use it too! */}
            <div className="columns mt-6 is-multiline">
                {decks.length ? decks.map(deck => (
                    <Deck key={deck.id} deck={deck} />
                )) : <p>You don't have any flashcard decks yet</p>}
            </div>




        </div>
    )
}

export default Decks
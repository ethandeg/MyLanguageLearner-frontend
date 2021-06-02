import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { deleteDeck } from "../actions/actions"
import { useState } from "react"
import { editDeck } from "../actions/actions"
import Message from "../utilityComponents/Message"

const Deck = ({ deck, timer, message }) => {
    const [formData, setFormData] = useState({ deckName: deck.name })
    const [editMode, setEditMode] = useState(false)
    const dispatch = useDispatch()
    const deckDelete = () => {
        try {
            timer(true)
            message(<Message bodyClass="is-warning has-text-centered" content="Deleted Succesfully"/>)
        } catch(e){
            timer(true)
            message(<Message bodyClass="is-danger has-text-centered" content="something went wrong...try again please!"/>)
        }
        dispatch(deleteDeck(deck.id))
    }

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    const changeEditMode = () => {
        if (editMode === true) {
            setEditMode(false)
        } else {
            setEditMode(true)
        }
    }

    const handleSubmit = (e) => {
        try {
            e.preventDefault();
            dispatch(editDeck(deck.id, formData.deckName))
            setFormData({ deckName: formData.deckName })
            setEditMode(false)
            timer(true)
            message(<Message bodyClass="is-info has-text-centered" content={`${formData.deckName} has been changed!`}/>)
        } catch(e){
            timer(true)
            message(<Message bodyClass="is-danger has-text-centered" content="Oops...Something went wrong!"/>)
        }

    }

    return (


            <div className="card" style={{zIndex: "0"}}>
                <div style={{ float: "right" }} className="mt-2 mr-4">
                    <i className="far fa-trash-alt has-text-danger content is-medium" style={{cursor: "pointer"}} onClick={deckDelete}>&nbsp;</i>
                    <i onClick={changeEditMode} className="far fa-edit has-text-primary content is-medium" style={{cursor: "pointer"}}></i>
                </div>
                <div className="has-text-centered p-6">
                    {editMode

                        ?
                        <form onSubmit={handleSubmit} className="card-content title is-6">
                            <input className="input is-info" onChange={handleChange} type='text' name="deckName" id="deckName" value={formData.deckName} />
                            <div className="has-text-centered" style={{ position: "absolute", left: "50%", top: "65%", transform: "translateX(-50%)" }}>
                                <button className="button is-primary is-small">Save</button>
                            </div>

                        </form>

                        :
                        <p className="card-content title is-5"><Link to={`/decks/${deck.id}`}>{deck.name}</Link></p>
                    }
                </div>
            </div>

    )
}

export default Deck
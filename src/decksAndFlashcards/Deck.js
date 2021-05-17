import { Link } from "react-router-dom"
import {useDispatch} from "react-redux"
import {deleteDeck} from "../actions/actions"
import {useState} from "react"
import {editDeck} from "../actions/actions"

const Deck = ({ deck }) => {
    const [formData, setFormData] = useState({deckName: deck.name})
    const [editMode, setEditMode] = useState(false)
    const dispatch = useDispatch()
    const deckDelete = () => {
        dispatch(deleteDeck(deck.id))
    }

    const handleChange = e => {
        const {name, value} = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    const changeEditMode = () => {
        if(editMode === true){
            setEditMode(false)
        } else {
            setEditMode(true)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(editDeck(deck.id, formData.deckName))
        setFormData({deckName: formData.deckName})
        setEditMode(false)
    }

    return (
        <div className="column is-one-quarter">
            <i className="far fa-trash-alt has-text-danger" onClick={deckDelete}></i>
            <i onClick={changeEditMode} className="far fa-edit has-text-primary"></i>
            <div className="card has-text-centered">
                {editMode
                
                ?
                <form onSubmit={handleSubmit} className="card-content title is-6">
                    <input onChange={handleChange} type='text' name="deckName" id="deckName" value={formData.deckName} />
                    <button className="button is-primary">Save</button>
                </form>
                   
                :
                    <p className="card-content title is-6"><Link style={{ display: "block", width: "100%", height: "100%" }} to={`/decks/${deck.id}`}>{deck.name}</Link></p>
                }
                
            </div>
        </div>
    )
}

export default Deck
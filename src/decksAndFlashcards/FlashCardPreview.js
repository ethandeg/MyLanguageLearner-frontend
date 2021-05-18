import {useDispatch} from "react-redux"
import {deleteFlashCard} from "../actions/actions"
import {useState} from "react"
import {editFlashCard} from "../actions/actions"
const FlashCardPreview = ({card}) => {
    const [formData, setFormData] = useState({flashFront: card.frontSide, flashBack: card.backSide})
    const [editMode, setEditMode] = useState(false)
    const dispatch = useDispatch()
    const deleteCard = () => {
        dispatch(deleteFlashCard(card.id, card.deckId))
    }

    const handleChange = e => {
        const {name, value} = e.target;
        setFormData(fData => ({
            ...fData,
            [name]: value
        }))
    }

    const changeEditMode = () => {
        if(!editMode){
            setEditMode(true)
        } else {
            setEditMode(false)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const {id, deckId} = card
        const {flashFront, flashBack} = formData
        dispatch(editFlashCard(id, flashFront, flashBack, deckId))
        setFormData({flashFront, flashBack})
        setEditMode(false)
    }

    return (
        <div className="column">
            <i className="far fa-trash-alt has-text-danger" onClick={deleteCard}></i>
            <i className="far fa-edit has-text-primary" onClick={changeEditMode}></i>
        <div className="card py-6">
            {editMode 
            
            ?
             <form onSubmit = {handleSubmit}>
                 <input type="text" name="flashFront" id="flashFront" value={formData.flashFront} onChange={handleChange} />
                 <input type="text" name="flashBack" id="flashBack" value={formData.flashBack} onChange={handleChange} />
                 <button className="button is-info is-outlined">Save</button>
             </form>
            :
            <div className="card-content has-text-centered">
                {card.frontSide}
            </div>            
            }

        </div>
        </div>
    )
}

export default FlashCardPreview
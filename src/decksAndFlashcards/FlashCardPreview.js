import {useDispatch} from "react-redux"
import {deleteFlashCard} from "../actions/actions"
import {useState} from "react"
import {editFlashCard} from "../actions/actions"
import Message from "../utilityComponents/Message"
const FlashCardPreview = ({card, timer, message}) => {
    const [formData, setFormData] = useState({flashFront: card.frontSide, flashBack: card.backSide})
    const [editMode, setEditMode] = useState(false)
    const dispatch = useDispatch()
    const deleteCard = () => {
        try{
            dispatch(deleteFlashCard(card.id, card.deckId))
            timer(true)
            message(<Message bodyClass="is-warning has-text-centered" content="Deleted flashcard"/>)
        } catch(e){
            timer(true)
            message(<Message bodyClass="is-danger has-text-centered" content="Something didn't work correctly!"/>)
        }
        
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
        try {
            e.preventDefault()
            const {id, deckId} = card
            const {flashFront, flashBack} = formData
            dispatch(editFlashCard(id, flashFront, flashBack, deckId))
            setFormData({flashFront, flashBack})
            setEditMode(false)
            timer(true)
            message(<Message bodyClass="is-info has-text-centered" content={`New card information, front side ${flashFront}, backside ${flashBack}`}/>)
        } catch(e){
            timer(true)
            message(<Message bodyClass="is-danger has-text-centered" content="Something didn't work correctly!"/>)
        }

    }

    return (
  

        <div className="card">
            <div className="content" style={{float: "right"}}>
                <i className="far fa-trash-alt has-text-danger" style={{cursor: "pointer"}} onClick={deleteCard}></i>
                <i className="far fa-edit has-text-primary mx-2" style={{cursor: "pointer"}} onClick={changeEditMode}></i>
            </div>

            {editMode 
            
            ?
             <form onSubmit = {handleSubmit} className='p-6'>
                 <div className="container">
                 <input className="input mb-1" type="text" name="flashFront" id="flashFront" value={formData.flashFront} onChange={handleChange} />
                 <input className="input mb-1" type="text" name="flashBack" id="flashBack" value={formData.flashBack} onChange={handleChange} />
                 <button style={{float:'right'}} className="button is-info is-outlined is-small">Save</button>
                 </div>
             </form>

            :
            <div className="card-content has-text-centered p-6">
                {card.frontSide}
            </div>            
            }

        </div>

    )
}

export default FlashCardPreview
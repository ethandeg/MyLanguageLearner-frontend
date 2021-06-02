
import {useState} from "react"

const AddToDeckForm = ({decks, submit, cancel}) => {
    const [formData, setFormData] = useState({deckId: ""})
    const handleChange = e => {
        const {name,value} = e.target
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }


    const handleSubmit = e => {
        e.preventDefault()
        submit(+formData.deckId)
        setFormData({deckId: ""})
    }
    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                {decks.map(deck => (
                    <div className="control" key={deck.id}>
                    <label className="radio">
                    <input key={deck.id} type="radio" value={deck.id} onChange={handleChange} id="deckId" name="deckId" /> 
                    <strong>{deck.name}</strong>
                    </label>
                    </div>
                ))}
                <div onClick ={() => cancel()} className="button is-warning is-light is-outlined mr-5">Cancel</div>
                <button className="button is-primary is-light is-outlined">Save</button>
            </form>

        </div>
    )
}


export default AddToDeckForm
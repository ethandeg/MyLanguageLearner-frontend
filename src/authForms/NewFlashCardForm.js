import {useState} from "react"


const NewFlashCardForm = ({submit, deckId}) => {
    const INITIAL_STATE = {frontSide: '', backSide: ''}
    const [formData, setFormData] = useState(INITIAL_STATE)
    const handleChange = e => {
        const {name, value} = e.target;
        setFormData(fData => ({
            ...fData,
            [name]: value
        }))
    }

    const handleSubmit = e => {
        e.preventDefault()
        submit(deckId, formData.frontSide, formData.backSide)
        setFormData(INITIAL_STATE)
    }

    return (
        <div className="container">

            <form className="box mt-6" onSubmit={handleSubmit}>
                <div className="field">
                    <label className="label">Front side:</label>
                    <div className="control">
                        <input className="input" type="text" id="frontSide" name="frontSide" value={formData.frontSide} onChange={handleChange} />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Back Side</label>
                    <div className="con+trol">
                        <input className="input" type="text" id="backSide" name="backSide" value={formData.backSide} onChange={handleChange} />
                    </div>
                </div>

                <button className="button is-primary">+</button>
            </form>
        </div>
    )
}

export default NewFlashCardForm
import { useState } from "react"
const GuessForm = ({ submit }) => {
    const INITIAL_STATE = { guess: '' }
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
        submit(formData.guess)
        setFormData(INITIAL_STATE)
    }
    return (
        <form className="box mt-6" onSubmit={handleSubmit}>
            <div className="field has-addons is-centered" style={{marginLeft: "30%" }}>

                <div className="control">
                    <input className="input" type="text" id="guess" name="guess" value={formData.guess} onChange={handleChange} />
                </div>
                <div className="control">
                <button className="button is-primary">Check</button>
                </div>
            </div>


        </form>
    )
}

export default GuessForm
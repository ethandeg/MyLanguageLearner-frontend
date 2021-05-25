import {useState} from "react"
const OneInputForm = ({submit, title, name}) => {
    const INITIAL_STATE = {[name]: ''}
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
        submit(formData)
        setFormData(INITIAL_STATE)
    }
    return (
        <form className="box mt-6" onSubmit={handleSubmit}>
            <h3 className="title has-text-centered is-5 has-text-primary">{title}</h3>
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
    )
}

export default OneInputForm
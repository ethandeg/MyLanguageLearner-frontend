import {useState} from "react"
const RadioForm = ({submit, values, name,primaryKey, label}) => {
    const INITIAL_STATE = {[name]: ''}

    const [formData, setFormData] = useState(INITIAL_STATE)

    const handleChange = e => {
        const {name, value} = e.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }))
    }

    const handleSubmit = e => {
        e.preventDefault()
        submit(formData)
        setFormData(INITIAL_STATE)
    }

    return (
        <form onSubmit={handleSubmit}>
            
            {values.map(val => (
                <div className="control" key={val[primaryKey]}>
                  <label className="radio">
                  <input type="radio" value={val[primaryKey]} onChange={handleChange} id={name} name={name} /> 
                  <strong>{val[label]}</strong>
                  </label>
                 </div>
            ))}
            <button onClick={handleSubmit} className="button is-outlined is-info is-small">submit</button>
        </form>
    )
}


export default RadioForm
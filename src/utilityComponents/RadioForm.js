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
            <button onClick={handleSubmit} className="button is-outlined is-info">+</button>
        </form>
    )
}
// return (
//     <div className="container">
//         <form onSubmit={handleSubmit}>
//             {decks.map(deck => (
//                 <div className="control">
//                 <label className="radio">
//                 <input key={deck.id} type="radio" value={deck.id} onChange={handleChange} id="deckId" name="deckId" /> 
//                 <strong>{deck.name}</strong>
//                 </label>
//                 </div>
//             ))}
//             <div onClick ={() => cancel()} className="button is-warning is-light is-outlined mr-5">Cancel</div>
//             <button className="button is-primary is-light is-outlined">Save</button>
//         </form>

//     </div>

export default RadioForm
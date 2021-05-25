import {useState} from "react"
import {translateQuery} from "../actions/actions"
import {useSelector} from "react-redux"
import RadioForm from "../utilityComponents/RadioForm"
const NewFlashCardForm = ({submit, deckId}) => {
    const INITIAL_STATE = {frontSide: '', backSide: '', lang: ''}
    const [formData, setFormData] = useState(INITIAL_STATE) 
    const [languageSelector, setLanguageSelector] = useState(false)
    const userLanguages = useSelector(state => state.userLanguages)
    console.log(userLanguages)
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

    const handleTranslate = async({lang}) => {
        const res = await translateQuery(formData.frontSide, lang)
        console.log(res)
        return res
    }



    return (
        <>
            <form className="box mt-6 pb-6" onSubmit={handleSubmit}>
                <div className="field">
                    <label className="label">Front side:</label>
                    <div className="control">
                        <input className="input" type="text" id="frontSide" name="frontSide" value={formData.frontSide} onChange={handleChange} />
                        {formData.frontSide ?
                            <div className="button is-link" onClick={() => handleTranslate(formData.frontSide, "ru")}>Translate</div>                    
                        :

                            <div className="button is-link" disabled>Translate</div>   
                        }

                    </div>
                </div>
                {languageSelector ?
                <RadioForm label="name" values={userLanguages} name="lang" primaryKey="code" submit={handleTranslate}/>
                
                
                :
                <>
                <div className="field">
                <label className="label">Back Side</label>
                <div className="con+trol">
                    <input className="input" type="text" id="backSide" name="backSide" value={formData.backSide} onChange={handleChange} />
                </div>
            </div>

            <button style={{float:"right"}} className="button is-primary">+</button>    
            </>           
                }

            </form>
            </>
    )
}

export default NewFlashCardForm
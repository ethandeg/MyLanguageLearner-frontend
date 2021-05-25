import {useState} from "react"
import {translateQuery} from "../actions/actions"
import {useSelector} from "react-redux"
import RadioForm from "../utilityComponents/RadioForm"
const NewFlashCardForm = ({submit, deckId}) => {
    const INITIAL_STATE = {frontSide: '', backSide: '', lang: ''}
    const [formData, setFormData] = useState(INITIAL_STATE) 
    const [languageSelector, setLanguageSelector] = useState(false)
    const [translationSegment, setTranslationSegment] = useState(null)
    const userLanguages = useSelector(state => state.userLanguages)
    console.log(formData)
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
        setLanguageSelector(false)
        setTranslationSegment(null)
    }

    const handleTranslate = async({lang}) => {
        try {
            const res = await translateQuery(formData.frontSide, lang)
            setTranslationSegment(res)
        } catch(e){
            console.log(e)
        }

    }

    const cancelAllModes = () => {
        setLanguageSelector(false)
        setTranslationSegment(false)
    }



    const setTranslateMode = () => {
        if(languageSelector){
            setLanguageSelector(false)
        } else {
            setLanguageSelector(true)
        }
    }
    const handleRadioChange = e => {
        console.log(e.target.value)
        setFormData({...formData, backSide: e.target.value})
    }
    if(translationSegment) return (
        <form onSubmit={handleSubmit}>
            <span className="tag is-delete is-danger has-text-centered"  onClick={cancelAllModes}></span>
            
        {translationSegment.translation.map(translation => (
            <div className="control" key={translation}>
              <label className="radio">
              <input type="radio" id="backSide" name="backSide" value={translation} onChange={handleRadioChange} /> 
              <strong>{translation}</strong>
              </label>
             </div>
        ))}
        <button onClick={handleSubmit} className="button is-outlined is-info">Create Flashcard</button>
    </form>
    )

    return (
        <>
        {languageSelector ?
        <>
        <span className="tag is-delete is-danger has-text-centered"  onClick={cancelAllModes}></span>
         <RadioForm label="name" values={userLanguages} name="lang" primaryKey="languageCode" submit={handleTranslate}/>
        </>
        :   
        <form className="box mt-6 pb-6" onSubmit={handleSubmit}>
        <div className="field">
            <label className="label">Front side:</label>
            <div className="control">
                <input className="input" type="text" id="frontSide" name="frontSide" value={formData.frontSide} onChange={handleChange} />
                {formData.frontSide ?
                    <div className="button is-link" onClick={setTranslateMode}>Translate</div>                    
                :

                    <div className="button is-link" disabled>Translate</div>   
                }

            </div>
        </div>


        <div className="field">
        <label className="label">Back Side</label>
        <div className="con+trol">
            <input className="input" type="text" id="backSide" name="backSide" value={formData.backSide} onChange={handleChange} />
        </div>
    </div>

    <button style={{float:"right"}} className="button is-primary">+</button>    

    </form>
        }

            </>
    )
}

export default NewFlashCardForm
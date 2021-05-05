import {useDispatch, useSelector} from "react-redux"
import {startLearning, quitLearning} from "../actions/actions"
const LanguageIcon = ({ language, learning }) => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.userInfo)
    const addLanguage = () => {
        dispatch(startLearning(user.username, language.code))
    }
    const removeLanguage = () => {
        dispatch(quitLearning(user.username, language.code))
    }
    return (
        <div className="column is-one-third">
            <div className="card">
                <div className="card-image">
                    <figure className="image is-5by3">
                        <img src={language.flag} alt={language.name} />
                    </figure>
                </div>
                <div className="card-header">
                    <p className="card-header-title is-centered">
                        {language.name}
                    </p>
                    {learning 
                    ?
                    <button className="button is-danger is-light" onClick={removeLanguage}>-</button> 
                    :
                    <button className="button is-success is-light mb-0" onClick={addLanguage}>+</button>
                     }
                </div>
            </div>
        </div>
    )
}

export default LanguageIcon
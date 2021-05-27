import { useSelector, useDispatch } from "react-redux"
import LanguageIcon from "./LanguageIcon"
import {startLearning, quitLearning} from '../actions/actions'
import {Link} from "react-router-dom"
const LanguageList = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.userInfo)
    const addLanguage = (code) => {
        dispatch(startLearning(user.username, code))
    }
    const removeLanguage = (code) => {
        dispatch(quitLearning(user.username, code))
    }
    //issue is probably no INITIAL STATE in reducer, so there is no emtpy arry
    const languages = useSelector(store => store.allLanguages) || undefined;
    const arrayLangs = useSelector(store => store.userLanguages.map(lang => lang.languageCode))
    
    return (
        <div className="container mt-6">
            <div className="columns is-mobile is-multiline">
                {languages && languages.map(lang => (
                    arrayLangs.includes(lang.code)
                     ?
                     <div className="column is-half-mobile is-one-third-tablet is-one-quarter-desktop is-one-fifth-widescreen" key={lang.code}>
                    <LanguageIcon language={lang}>
                    <Link className="button is-info is-light is-small" to ={`/learn/${lang.code}`}>Go</Link>
                    <button className="button is-danger is-light is-small" onClick={()=> removeLanguage(lang.code)}>-</button>
                    </LanguageIcon>

                     </div>
                     :
                     <div className="column is-half-mobile is-one-third-tablet is-one-quarter-desktop is-one-fifth-widescreen" key={lang.code}>
                    <LanguageIcon language={lang}>
                    <button className="button is-success is-light mb-0 is-small" onClick={() => addLanguage(lang.code)}>+</button>
                    </LanguageIcon>
                    
                    </div>
                ))}
            </div>
        </div>
    )
}


export default LanguageList
import { useSelector, useDispatch } from "react-redux"
import LanguageIcon from "./LanguageIcon"
import {startLearning, quitLearning} from '../actions/actions'
import {Link} from "react-router-dom"
import Message from "../utilityComponents/Message"
const LanguageList = ({timer, message}) => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.userInfo)
    const addLanguage = (code) => {
        try {
            dispatch(startLearning(user.username, code))
            timer(true)
            message(<Message bodyClass="is-primary has-text-centered" content="Great! Let's get learning!"/>)
        }catch(e){
            timer(true)
            message(<Message bodyClass="is-danger has-text-centered" content="Something didn't work correctly!"/>)
        }

    }
    const removeLanguage = (code) => {
        try {
            dispatch(quitLearning(user.username, code))
            timer(true)
            message(<Message bodyClass="is-danger has-text-centered" content="I get it...You don't have the time to learn a new language..."/>)
        }catch(e){
            timer(true)
            message(<Message bodyClass="is-danger has-text-centered" content="Something didn't work correctly!"/>)
        }
    }
    //issue is probably no INITIAL STATE in reducer, so there is no emtpy arry
    const languages = useSelector(store => store.allLanguages) || undefined;
    const arrayLangs = useSelector(store => store.userLanguages.map(lang => lang.languageCode))
    
    return (
        <div className="container my-6">
            <h1 className="title is-2 has-text-primary has-text-centered">Our Languages</h1>
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
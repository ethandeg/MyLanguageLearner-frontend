import { useSelector } from "react-redux"
import LanguageIcon from "./LanguageIcon"
const LanguageList = () => {
    //issue is probably no INITIAL STATE in reducer, so there is no emtpy arry
    const languages = useSelector(store => store.allLanguages) || undefined;

    
    return (
        <div className="container mt-6">
            <div className="columns is-multiline">
                {languages && languages.map(lang => (
                    <LanguageIcon language={lang} key={lang.code} />
                ))}
            </div>
        </div>
    )
}


export default LanguageList
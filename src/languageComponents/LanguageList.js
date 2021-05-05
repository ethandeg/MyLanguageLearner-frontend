import { useSelector } from "react-redux"
import LanguageIcon from "./LanguageIcon"
const LanguageList = () => {
    //issue is probably no INITIAL STATE in reducer, so there is no emtpy arry
    const languages = useSelector(store => store.allLanguages) || undefined;
    const userLanguages = useSelector(store => store.userLanguages)
    const arrayLangs = userLanguages.map(lang => lang.languageCode)
    return (
        <div className="container mt-6">
            <div className="columns is-multiline">
                {languages && languages.map(lang => (
                    arrayLangs.includes(lang.code)
                     ?
                    <LanguageIcon language={lang} key={lang.code} learning={true} />
                     :
                    <LanguageIcon language={lang} key={lang.code} learning={false}/>
                ))}
            </div>
        </div>
    )
}


export default LanguageList
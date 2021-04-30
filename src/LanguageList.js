import { useSelector } from "react-redux"
import LanguageIcon from "./LanguageIcon"
const LanguageList = () => {
    const languages = useSelector(store => store.allLanguages) || undefined;
    return (
        <div className="container mt-6">
            <div className="columns is-multiline">
                {languages.map(lang => (
                    <LanguageIcon language={lang} key={lang.code} />
                ))}
            </div>
        </div>
    )
}


export default LanguageList
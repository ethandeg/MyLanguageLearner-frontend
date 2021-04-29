import {useSelector} from "react-redux"
const LanguageList = () => {
    const languages = useSelector(store => store.allLanguages) || undefined;
    console.log("*************************************************************************************")
    console.log(languages)
    return(
        <>
        <ul>
            {languages.map(lang => (
                <li key={lang.code}>{lang.name}</li>
            ))}
        </ul>
        </>
    )
}


export default LanguageList
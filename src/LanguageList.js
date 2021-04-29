import {useSelector} from "react-redux"
const LanguageList = () => {
    const languages = useSelector(store => store.allLanguages)
    return(
        <>
        <ul>
            {languages.map(lang => (
                <li>{lang.name}</li>
            ))}
        </ul>
        </>
    )
}


export default LanguageList
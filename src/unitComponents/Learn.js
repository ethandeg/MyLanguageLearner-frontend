import {useDispatch, useSelector} from "react-redux"
import {useEffect} from "react"
import {getUnits} from "../actions/actions"
import {useParams} from "react-router-dom"
import Unit from "./Unit"
import {loadCompletedLessons} from "../actions/actions"
const Learn = () => {
    const {languageCode} = useParams()
    const units = useSelector(state => state.units)
    const user = useSelector(state => state.userInfo)
    const userLanguage = useSelector(state => state.userLanguages.find(lang => lang.languageCode === languageCode))
    const dispatch = useDispatch()

    useEffect(() => {
        if(!units && user.username){
            dispatch(getUnits())
        }
        if(user.username && !userLanguage.completedLessons){
            dispatch(loadCompletedLessons(user.username, languageCode))
        }

  
    }, [dispatch, user, languageCode])
    return (
        <>
        <h1 className="title is-2 has-text-primary">{languageCode}</h1>
        {units && units.map(unit => (
            <Unit unit={unit} key={unit.id}/>
        ))}
        </>
    )
}

export default Learn
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getUnits } from "../actions/actions"
import { useParams } from "react-router-dom"
import Units from "./Units"
import { loadCompletedLessons } from "../actions/actions"
const Learn = () => {
    const { languageCode } = useParams()
    const units = useSelector(state => state.units)
    const user = useSelector(state => state.userInfo)
    const userLanguage = useSelector(state => state.userLanguages.find(lang => lang.languageCode === languageCode))
    const dispatch = useDispatch()

    useEffect(() => {
        if (!units && user.username) {
            dispatch(getUnits())
        }
        if (user.username && !userLanguage.completedLessons) {
            dispatch(loadCompletedLessons(user.username, languageCode))
        }


    }, [dispatch, user, languageCode])
    try{
        return (
            <div className="container">
                <h1 className="title is-2 has-text-primary has-text-centered my-6">{userLanguage.name}</h1>
                {units && units.map(unit => (
                    <Units unit={unit} key={unit.id} languageCode={languageCode}/>
                ))}
            </div>
        )
    }catch(e){
        return <p>Loading....</p>
    }

}

export default Learn
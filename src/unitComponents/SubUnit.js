import {useParams} from "react-router-dom"
import {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import {loadLessonMaterial} from "../actions/actions"
import Lesson from "./Lesson"

const SubUnit = ({timer, message}) => {
    const {languageCode, subUnit} = useParams()
    const dispatch = useDispatch()
    const thisSubUnit = useSelector(state => state.lessons.find(lesson => {
        return lesson.languageCode === languageCode && +subUnit === +lesson.subUnit
    }))

    useEffect(() => {
        if(!thisSubUnit){
            dispatch(loadLessonMaterial(languageCode, subUnit))
        }

    }, [languageCode, subUnit, dispatch, thisSubUnit])
    //dispatch for learning material
    //cycle through to learn

    return (
        <>
        {thisSubUnit 
        ?
        <Lesson subUnit = {thisSubUnit} timer={timer} message={message}/>         
        :
         <h1>Loading subunits...</h1>
         }
        
        </>
    )
}


export default SubUnit
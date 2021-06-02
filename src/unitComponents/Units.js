import {useSelector} from "react-redux"
import {Link} from "react-router-dom"
const Units = ({ unit, languageCode }) => {
    const completedLessons = useSelector(state => state.userLanguages.find(lang => lang.languageCode === languageCode).completedLessons)

    if(!completedLessons) return <h1>loading.....</h1>
    return (
        <article className="panel is-primary">
            <p className="panel-heading">{unit.unitName} - {unit.unitNumber}</p>
            <div className="panel-block"></div>

            {unit.subUnits.map((sub, i) => (
                //give icon "has-text-primary" if it is in completed lessons
                <div key={sub}>
                    <Link className="panel-block" to={`/learn/${languageCode}/${sub}`}>
                        <span className="icon is-left">
                            {completedLessons.includes(sub) 
                            ?
                            <i className="fas fa-book has-text-primary" aria-hidden="true"></i>
                             :
                             <i className="fas fa-book" aria-hidden="true"></i>
                             }
                            
                        </span>
                        Lesson {i} - Sub-Unit {sub}
                    </Link>
                </div>
            ))}

        </article>
    )
}

export default Units
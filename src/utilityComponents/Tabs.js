import {NavLink} from "react-router-dom"
const Tabs = ({BASE_URL, titles, active}) => {
    //props {BASEURL, titles: [], }
    return (
    <div className="tabs">
        <ul>

            {titles.map(title => (
                title === active 
                ?
                <li key={title} className="is-active"><NavLink to={`${BASE_URL}/${title}`}>{title}</NavLink></li>
                :
                <li key={title}><NavLink to={`${BASE_URL}/${title}`}>{title}</NavLink></li>
            ))}
        </ul>
    </div>
    )
}

export default Tabs
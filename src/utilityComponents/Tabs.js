import {NavLink} from "react-router-dom"
const Tabs = ({BASE_URL, titles, active}) => {
    console.log(titles)
    //props {BASEURL, titles: [], }
    return (
    <div className="tabs">
        <ul>
            {/* <li className="is-active"><a>Pictures</a></li>
            <li><a>Music</a></li>
            <li><a>Videos</a></li>
            <li><a>Documents</a></li> */}
            {/* {titles.map(title => (
                <li key={title}><NavLink to={`${BASE_URL}/${title}`}>{title}</NavLink></li>
            ))} */}
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
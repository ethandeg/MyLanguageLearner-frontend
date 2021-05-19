import {useSelector} from "react-redux"
import {Link} from "react-router-dom"
const Profile = () => {
    const user = useSelector(store => store.userInfo)
    const userLanguages = useSelector(store => store.userLanguages.map(lang => lang.languageCode))
    const userLanguagesFull = useSelector(store => store.allLanguages.filter(lang => userLanguages.includes(lang.code)))
    const decks = useSelector(store => store.decks)
    
    try {
        return (
        
            <div className="container">
                
                <h1>Hello from the profile page! {user.username}</h1>
                <div className="columns mt-6">
                    <div className="column is-two-thirds">
                        <div className="box">
                        <article className="media pl-6">
                            <figure className="media-left">
                                <p className="image is-128x128">
                                {user.profilePic 
                                
                                ?
                                <img  src={user.profilePic} alt={`${user.username} profile picture`}></img>
                                :
                                
                                <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" alt="placeholder profile picture"></img>
                                }
                                </p>
                                
                            </figure>
                            <div className="media-content">
                                <div className="content">
                                    <h3 className="title is-2 has-text-primary is-uppercase">
                                        <strong>{user.username}</strong>
                                    </h3>
                                </div>
                                <nav className="level is-mobile">
                                    <div className="level-left">
                                        {userLanguagesFull.map(lang => (
                                            <div className="mx-1">
                                            <Link className="level-item">
                                               <span className="icon is-medium"><img src={lang.flag} alt={lang.name}></img></span> 
                                            </Link>
                                            </div>
                                        ))}
    
                                    </div>
                                </nav>
                            </div>
                        </article>
                        </div>
                    </div>
                    <div className="column mt-6 ml-6">
                        <Link className="button is-info is-outlined" to="/profile/edit">Edit Profile</Link>
                    </div>
                </div>
                
    
                <div className="columns mt-6">
                    <div className="column is-full has-text-primary">
                    <nav className="level">
                        <div className="level-item has-text-centered">
                            <div>
                            <p className="heading">Experience</p>
                            <p className="title">{user.experience}</p>
                            </div>
                        </div>
                        <div className="level-item has-text-centered">
                            <div>
                            <p className="heading">Languages Learning</p>
                            <p className="title">{userLanguages.length}</p>
                            </div>
                        </div>
                        <div className="level-item has-text-centered">
                            <div>
                            <p className="heading">Decks Created</p>
                            <p className="title">{decks.length}</p>
                            </div>
                        </div>
                        <div className="level-item has-text-centered">
                            <div>
                            <p className="heading">Favorite Language</p>
                            <p className="title">{userLanguagesFull[0].name}</p>
                            </div>
                        </div>
                    </nav>
                    </div>
                </div>
    
            </div>
        )
    } catch(e){
        return <p>loading....</p>
    }
    
}

export default Profile
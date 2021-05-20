import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { useState } from "react"
import { editUser, updatePass } from "../actions/actions"
import PasswordChangeModal from "./PasswordChangeModal"

const Profile = () => {
    const dispatch = useDispatch()
    const user = useSelector(store => store.userInfo)
    const userLanguages = useSelector(store => store.userLanguages.map(lang => lang.languageCode))
    const userLanguagesFull = useSelector(store => store.allLanguages.filter(lang => userLanguages.includes(lang.code)))
    const decks = useSelector(store => store.decks)
    const [editMode, setEditMode] = useState(false)
    const [changePassword, setChangePassword] = useState(false)
    const INITIAL_STATE = { profilePic: user.profilePic || "" }
    const [formData, setFormData] = useState(INITIAL_STATE)

    const changeEditMode = () => {
        if (editMode) {
            setEditMode(false)
        } else {
            setEditMode(true)
        }
    }

    const changePasswordMode = () => {
        if (changePassword) {
            setChangePassword(false)
        } else {
            setChangePassword(true)
        }
    }

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(editUser(user.username, formData))
        setFormData(INITIAL_STATE)
    }

    const changePasswordSubmit = async (data) => {
        const { oldPassword, newPassword, newPasswordVerify } = data

        try {
            if (newPasswordVerify !== newPassword) throw new Error("Please check your passwords, make sure they are the same")
            await updatePass({ username: user.username, oldPassword, newPassword })
            changePasswordMode()

        } catch (e) {
            console.error("something went wrong", e)
        }

    }

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
                                            <img src={user.profilePic} alt={`${user.username} profile picture`}></img>
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
                                                <div className="mx-1" key={lang.code}>
                                                    <i className="level-item">
                                                        <span className="icon is-medium"><img src={lang.flag} alt={lang.name}></img></span>
                                                    </i>
                                                </div>
                                            ))}

                                        </div>
                                    </nav>
                                </div>
                            </article>
                        </div>
                    </div>
                    <div className="column mt-6 ml-6">
                        <button className="button is-info is-outlined" onClick={changeEditMode}>Edit Profile</button>
                        <button className="button is-danger is-outlined" onClick={changePasswordMode}>Change Password</button>
                    </div>
                </div>
                {changePassword && <PasswordChangeModal handleCancel={changePasswordMode} handleSubmit={changePasswordSubmit} />}

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

                {editMode

                    ?
                    <div className="box">
                        <form onSubmit={handleSubmit}>
                            <p>Username: <strong>{user.username}</strong></p>
                            <div className="field has-addons">
                                <label className="label has-text-primary">Profile Picture:</label>
                                <div className="control">
                                    <input type="text" name="profilePic" id="profilePic" value={formData.profilePic} onChange={handleChange} />
                                </div>
                            </div>
                            <button className="button is-primary is-light">Submit</button>

                        </form>
                    </div>
                    :
                    <div className="box">
                        <p>Username: <strong>{user.username}</strong></p>
                        <p>Profile Picture: <strong>{user.profilePic}</strong></p>
                    </div>
                }


            </div>
        )
    } catch (e) {
        return <p>loading....</p>
    }

}

export default Profile
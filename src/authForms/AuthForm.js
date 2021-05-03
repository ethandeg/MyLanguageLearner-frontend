import { useState } from "react"
import {useHistory} from "react-router-dom"
const AuthForm = ({submit}) => {
    const history = useHistory()
    const INITIAL_STATE = { username: '', password: '' }
    const [formData, setFormData] = useState(INITIAL_STATE)
    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    const handleSubmit = e => {
        e.preventDefault()
        try {
            const res = submit(formData)
            setFormData(INITIAL_STATE)
            history.push("/")
        } catch (e){
            console.log('err')
        }
 

    }

    return (
        <div className="container">

            <form className="box mt-6" onSubmit={handleSubmit}>
                <div className="field">
                    <label className="label">Username</label>
                    <div className="control">
                        <input className="input" type="text" id="username" name="username" value={formData.username} onChange={handleChange} />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Password</label>
                    <div className="control">
                        <input className="input" type="password" placeholder="********" id="password" name="password" value={formData.password} onChange={handleChange} />
                    </div>
                </div>

                <button className="button is-primary">Authenticate</button>
            </form>
        </div>
    )
}


export default AuthForm
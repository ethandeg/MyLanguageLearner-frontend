import { useState } from "react"
const AuthForm = () => {
    const INITIAL_STATE = { username: '', password: '' }
    const [formData, setFormData] = useState(INITIAL_STATE)
    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    return (
        <div className="container">

            <form className="box mt-6">
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

                <button className="button is-primary">Sign in</button>
            </form>
        </div>
    )
}


export default AuthForm
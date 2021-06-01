import { useState } from "react"
import { useHistory, Link } from "react-router-dom"

const AuthForm = ({ submit, type }) => {
    const history = useHistory()
    const INITIAL_STATE = { username: '', password: '' }
    const [formData, setFormData] = useState(INITIAL_STATE)
    const [errors, setErrors] = useState(null)
    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        try {
            const res = await submit(formData)
            setFormData(INITIAL_STATE)
            if(Array.isArray(res)) throw new Error(res)
            history.push("/")
        } catch (e) {
            setErrors(e.message)
        }


    }

    const title = type === "login" ? "Login": "Register"
    const footer = type === "login" ? <Link to="/register">Don't have an account? Click here to register.</Link> : <Link to="/login">Already have an account? Click here to login</Link>
    return (
        <div className="container my-6">
            <div className="columns">
                <div className="column"></div>
                <div className="column is-half">
                <form className="box mt-6" onSubmit={handleSubmit}>
            <h2 className="title is-4 has-text-centered has-text-primary">{title}</h2>
                {errors && <p className="has-text-danger">{errors}</p>}
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
                <div className="has-text-centered">{footer}</div>
                <button className="button is-primary">{title}</button>
            </form>
                </div>
                <div className="column"></div>
            </div>
            

        </div>
    )
}


export default AuthForm
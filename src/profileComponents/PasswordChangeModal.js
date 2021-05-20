import Modal from "../utilityComponents/Modal"
import { useState } from 'react'

const PasswordChangeModal = ({ handleCancel, handleSubmit }) => {
    const INITIAL_STATE = { oldPassword: '', newPassword: "", newPasswordVerify: "" }
    const [formData, setFormData] = useState(INITIAL_STATE)
    const handleChange = e => {
        const { name, value } = e.target
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    const submit = e => {
        e.preventDefault()
        handleSubmit(formData)
        setFormData(INITIAL_STATE)
    }
    //keys need to be set to => "title", "body", "footer"
    return (
        <Modal>
            <span key="title">ChangePassword</span>
            <form key="body" className="box" onSubmit={submit}>
                <div className="field">
                    <label className="label">Old Password:</label>
                    <div className="control">
                        <input className="input" type="text" id="oldPassword" name="oldPassword" value={formData.oldPassword} onChange={handleChange} />
                    </div>
                </div>
                <div className="field">
                    <label className="label">New Password:</label>
                    <div className="control">
                        <input className="input" type="text" id="newPassword" name="newPassword" value={formData.newPassword} onChange={handleChange} />
                    </div>
                </div>
                <div className="field">
                    <label className="label">New Password Again:</label>
                    <div className="control">
                        <input className="input" type="text" id="newPasswordVerify" name="newPasswordVerify" value={formData.newPasswordVerify} onChange={handleChange} />
                    </div>
                </div>
                <div className="button is-warning is-light is-outlined" onClick={() => handleCancel()}>Cancel</div>
                <button className="button is-primary is-light is-outlined">Submit</button>
            </form>

        </Modal>
    )
}


export default PasswordChangeModal
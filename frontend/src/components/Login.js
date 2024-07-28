import React, {useState} from 'react'
import '../styles/Login.css';

export default function Login(props) {

    const {closeLogIn, handleLogIn} = props
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        isNewUser: false,
    })

    const [loginMessage, setLoginMessage] = useState("")

    const handleCancelClick = () => closeLogIn()

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function handleSubmit() {

    }

    return (
        <main className="login">
            <h1> Log In / Sign Up </h1>
            <section className="user-info">
                <div>
                    <label> Username </label> <br/>
                    <input
                        type="text"
                        onChange={handleChange}
                        name="username"
                        value={formData.username}
                    />
                </div>
                <div>
                    <label> Password </label> <br/>
                    <input
                        type="password"
                        onChange={handleChange}
                        name="password"
                        value={formData.password}
                    />
                </div>
            </section>

            <p> {loginMessage} </p>

            <input
                type="button"
                value={formData.isNewUser ? "Sign Up" : "Log In"}
                className="login-button"
                onClick={handleSubmit}
            />

            <section className="extra">
                <div className="extra-left">
                    <label> New User? </label>
                    <input
                        type="checkbox"
                        className="radio-button"
                        checked={formData.isNewUser}
                        onChange={handleChange}
                        name="isNewUser"
                    />
                </div>
                <div className="extra-right">
                    <input
                        type="button"
                        value="Cancel"
                        className="cancel-button"
                        onClick={handleCancelClick}
                    />
                </div>
            </section>
        </main>
    )
}
import {useState} from "react";
import axios from 'axios'
import 'react-skeleton-css/styles/skeleton.2.0.4.css'
import 'react-skeleton-css/styles/normalize.3.0.2.css';
import config from "../config.json"

const registerURL = config.regURL

function Register(props) {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState(null)

    const submitHandlerReg = (event) => {
        event.preventDefault();
        if (username.trim() === '' || email.trim() === '' || firstName.trim() === '' || lastName.trim() === '' || password.trim() === '') {
            setMessage('All fields are required'); 
            return
        }

        const requestBody = {
            username: username,
            email: email, 
            firstName: firstName, 
            lastName: lastName,
            password: password
        }

        axios.post(registerURL, requestBody).then(response => {
            setMessage("Registration Successful")
        }).catch(error => {
            if (error.response.status === 401 || error.response.status === 403) {
                setMessage(error.response.data.message)
            }
            else {
                setMessage("Sorry, experiencing server issues. Try again later")
            }
        })
    }

    return (
        <div className = "container">
            <form onSubmit={submitHandlerReg}>
                <h5>Register</h5>
                <div className = "row">
                    <div className = "six columns">
                        first name: <input className = "u-full-width" type = "text" value = {firstName} onChange = {event => setFirstName(event.target.value)} />
                    </div>
                    <div className = "six columns">
                        last name: <input className = "u-full-width" type = "text" value = {lastName} onChange = {event => setLastName(event.target.value)} />
                    </div>
                </div>
                email: <input className = "u-full-width" type = "text" value={email} onChange = {event => setEmail(event.target.value)} /> <br/>
                username: <input className = "u-full-width" type = "text" value={username} onChange = {event => setUsername(event.target.value)} /> <br/>
                password: <input className = "u-full-width" type = "password" value = {password} onChange = {event => setPassword(event.target.value)} /> <br/>
                <br />
                <input className = "u-pull-right" type = "button" value = "Register" />
            </form>
            {message && <p className = "register_message">{message}</p>}
        </div>
    )
}

export default Register
import {useState} from "react";
import axios from 'axios'
import config from "../config.json"

const registerURL = config.regURL

function Register(props) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState(null)

    const submitHandlerReg = (event) => {
        event.preventDefault();
        if (username.trim() === '' || email.trim() === '' || name.trim() === '' || password.trim() === '') {
            setMessage('All fields are required'); 
            return
        }

        const requestBody = {
            username: username,
            email: email, 
            name: name, 
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
        <div>
            <form onSubmit={submitHandlerReg}>
                <h5>Register</h5>
                name: <input type = "text" value = {name} onChange = {event => setName(event.target.value)} /> <br/>
                email: <input type = "text" value={email} onChange = {event => setEmail(event.target.value)} /> <br/>
                username: <input type = "text" value={username} onChange = {event => setUsername(event.target.value)} /> <br/>
                password: <input type = "password" value = {password} onChange = {event => setPassword(event.target.value)} /> <br/>
                <input type = "submit" value = "Register" />
            </form>
            {message && <p className = "register_message">{message}</p>}
        </div>
    )
}

export default Register
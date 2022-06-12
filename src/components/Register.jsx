import config from "../config.json"
import {useState} from "react";
import {Link} from "react-router-dom"
import axios from 'axios'
import 'react-skeleton-css/styles/skeleton.2.0.4.css'
import 'react-skeleton-css/styles/normalize.3.0.2.css'


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
        <div className = "container">
            <form onSubmit={submitHandlerReg}>
                <h5>Register</h5>
                name: <input className = "u-full-width" type = "text" value = {name} onChange = {event => setName(event.target.value)} />
                email: <input className = "u-full-width" type = "text" value={email} onChange = {event => setEmail(event.target.value)} /> <br/>
                username: <input className = "u-full-width" type = "text" value={username} onChange = {event => setUsername(event.target.value)} /> <br/>
                password: <input className = "u-full-width" type = "password" value = {password} onChange = {event => setPassword(event.target.value)} /> <br/>
                <br />
                {message && <p className = "message">{message}</p>}
                <input className = "u-pull-right" type = "submit" value = "Register" />
                <p id = "loglink">Already a member? Login <Link to = "/login">here</Link></p>
            </form>
            
        </div>
    )
}

export default Register
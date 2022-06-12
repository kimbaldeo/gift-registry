import {useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { setUserSession } from "./AuthServices"
import config from "../config.json"
import 'react-skeleton-css/styles/skeleton.2.0.4.css'
import 'react-skeleton-css/styles/normalize.3.0.2.css';

const loginURL = config.loginURL

function Login(props) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState(null)

    const submitHandlerLogin = (event) => {
        event.preventDefault();
        if (username.trim() === '' || password.trim() === '') {
            setMessage('A username and password are required');
            return;
        }
        setMessage(null);

        const requestBody = {
            username: username,
            password: password
        }

        axios.post(loginURL, requestBody).then((response) => {
            setUserSession(response.data.user, response.data.token);
            props.history.push('/home');
        }).catch((error) => {
            if (error.response.status === 401 || error.response.status === 403) {
              setMessage(error.response.data.message);
            } 
            else {
              setMessage('Sorry, the server is currently down. Please try again later');
            }
        })
    }

    return (
        <div className = "login">
            <div className = "container">
                <form onSubmit={submitHandlerLogin}>
                    <h5>Login</h5>
                    <div className = "five columns">
                        username: <input className = "u-full-width" type ="text" value = {username} onChange = {event => setUsername(event.target.value)} /> <br/>
                        password: <input className = "u-full-width" type="password" value = {password} onChange = {event => setPassword(event.target.value)} /> <br/>
                        <br />
                        <input type = "submit" value = "Login" />
                    </div>
                </form>
                {message && <p className = "message">{message}</p>}
            </div>
            <p id = "reglink">New User? Register <Link to = "/register">here</Link></p>
        </div>
    )
}

export default Login
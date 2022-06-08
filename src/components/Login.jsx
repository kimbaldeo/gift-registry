import {useState} from 'react'
import axios from 'axios'
import { setUserSession } from "./AuthServices"
import config from "../config.json"

const loginURL = config.loginURL

function Login(props) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState(null)

    const submitHandlerLogin = (event) => {
        event.preventDefault();
        if (username.trim() === '' || password.trim() === '') {
            setErrorMessage('A username and password are required');
            return;
        }
        setErrorMessage(null);

        const requestBody = {
            username: username,
            password: password
        }

        axios.post(loginURL, requestBody).then((response) => {
            setUserSession(response.data.user, response.data.token);
            props.history.push('/home');
        }).catch((error) => {
            if (error.response.status === 401 || error.response.status === 403) {
              setErrorMessage(error.response.data.message);
            } 
            else {
              setErrorMessage('Sorry, the server is currently down. Please try again later');
            }
        })
    }

    return (
        <div>
            <form onSubmit={submitHandlerLogin}>
                <h5>Login</h5>
                username: <input type="text" value = {username} onChange = {event => setUsername(event.target.value)} /> <br/>
                password: <input type="password" value = {password} onChange = {event => setPassword(event.target.value)} /> <br/>
                <input type="submit" value="Login" />
            </form>
            {errorMessage && <p className = "message">{errorMessage}</p>}
        </div>
    )
}

export default Login
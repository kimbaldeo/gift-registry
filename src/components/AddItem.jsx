import config from "../config.json"
import { getUser } from "./AuthServices"
import axios from 'axios';
import { useHistory } from "react-router-dom"
import {useState} from "react";
import 'react-skeleton-css/styles/skeleton.2.0.4.css'
import 'react-skeleton-css/styles/normalize.3.0.2.css';

const addItemURL = config.addItemURL


function AddItem() {
    const [amazonURL, setAmazonURL] = useState("")
    const [productName, setProductName] = useState("")
    const [message, setMessage] = useState("")
    const [confirmMessage, setConfirmMessage] = useState(null)

    const itemSubmitHandler = (event) => {
        event.preventDefault();
        if (amazonURL === '' || productName === '' || message === '') {
            setMessage('All fields are required'); 
            return
        }

        getUser()

        const requestBody = {
            amazon_url: amazonURL,
            product_name: productName,
            message: message,
        }

        axios.post(addItemURL, requestBody).then(response => {
            setMessage("Successfully Added Gift")
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
            <form className = "form" onSubmit = {itemSubmitHandler} >
                <h5>Add a gift to your registry</h5>
                Amazon Product Link: <input className = "u-full-width" type = "text"  /> <br />
                Product Name: <input className = "u-full-width" type = "text"  /> <br />
                Message:<textarea className = "u-full-width" type = "text" /> <br />
                <br />
                <input type = "button" value = "Gift Me" className = "button-primary u-pull-right"/>
            </form>
        </div>
    )
}

export default AddItem
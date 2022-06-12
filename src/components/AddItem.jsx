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
    const [note, setNote] = useState("")
    const [image, setImage] = useState("")
    const [price, setPrice] = useState("")
    const [message, setMessage] = useState(null)

    const itemSubmitHandler = (event) => {
        event.preventDefault();
        if (amazonURL === '' || productName === '' || note === '') {
            setMessage('All fields are required'); 
            return
        }

        getUser()

        const fetchItemInfo = () => {
            let params = {
                api_key: config.rainforestAPIKey,
                type: "product",
                url: amazonURL
            }

            axios.get('https://api.rainforestapi.com/request', { params })
                .then(response => {
                    setImage(JSON.stringify(response.data.product.main_image));
                    setPrice(JSON.stringify(response.data.product.buybox_winner.price.value));
                })
                .catch(error => {
                    setMessage("Sorry could not retrieve item details from Amazon")
                })
        }

        fetchItemInfo()

        const requestBody = {
            amazonURL: amazonURL,
            productName: productName,
            productImg: image,
            message: note,
            price: price,
            contributions: 0,
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
                Amazon Product Link: <input className = "u-full-width" type = "text" value = {amazonURL} onChange = {event => setAmazonURL(event.target.value)}/> <br />
                Product Name: <input className = "u-full-width" type = "text" value = {productName} onChange = {event => setProductName(event.target.value)}/> <br />
                Message:<textarea className = "u-full-width" type = "text" value = {note} onChange = {event => setNote(event.target.value)}/> <br />
                <br />
                <input className = "button-primary u-pull-right" type = "submit" value = "Gift Me" />
            </form>
            {message && <p className = "message">{message}</p>}
        </div>
    )
}



export default AddItem

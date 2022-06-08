import config from "../config.json"
import { useHistory } from "react-router-dom"

function AddItem() {

    const itemSubmitHandler = (event) => {
        event.preventDefault();
        // something to take back to mylist page
    }

    return (
        <form className = "form" onSubmit = {itemSubmitHandler} >
            Amazon Product Link: <input type = "text"  /> <br />
            Product Name: <input type = "text"  /> <br />
            Message: <input type = "text" /> <br />
            <input type = "submit" value = "addToWishlist" />
    </form>
    )
}

export default AddItem
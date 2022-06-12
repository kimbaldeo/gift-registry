import { getUser, resetUserSession } from "../components/AuthServices"
import { Link } from "react-router-dom"

function MyList(props) {
    const user = getUser()
    const name = user !== "undefined" && user ? user.name : ""

    const logoutHandler = () => {
        resetUserSession();
        props.history.push('/login');
    } 

    return (
        <div className = "wishlist">
            <h4>Welcome Back {name}! Are you getting ready to celebrate?</h4> 
            <div id = "wishlist_buttons">
                <input type = "button" value = "logout" onClick = {logoutHandler} />
                <Link to = "/mylist/additem"><input type = "button" value = "Add Item" /></Link>
            </div>
            <div className = "wishlistItems">
            PUT WISHLIST ITEMS HERE
            </div>
        
        </div>
    )
}

export default MyList
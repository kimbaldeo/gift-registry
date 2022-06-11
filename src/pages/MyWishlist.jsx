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
        <>
        <h3>Welcome Back {name}! Are you getting ready to celebrate?</h3> 
        <input type = "button" value = "logout" onclick = {logoutHandler} />
        <div className = "wishlistItems">
            PUT WISHLIST ITEMS HERE
        </div>
        <input type = "button" value = "Add Item" onclick = {logoutHandler}/>

        {/* view my wishlist items */}
        </>
    )
}

export default MyList
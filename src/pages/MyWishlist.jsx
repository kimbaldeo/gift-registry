import { getUser, resetUserSession } from "../components/AuthServices"
import AddItem from "../components/AddItem"
import { useNavigate } from "react-router-dom"

function MyList(props) {
    const user = getUser()
    const name = user !== "undefined" && user ? user.name : ""

    const logoutHandler = () => {
        resetUserSession();
        props.history.push('/login');
    } 

    const addItemRoute = () => {
        return
        // something to go to additem page
    }

    return (
        <>
        <h3>Hello {name}!</h3> 
        <input type = "button" value = "logout" onclick = {logoutHandler} />
        <input type = "button" value = "Add Item" onclick = {addItemRoute}/>

        {/* view my wishlist items */}
        </>
    )
}

export default MyList
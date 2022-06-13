import { getUser, resetUserSession } from "../components/AuthServices"
import { Link } from "react-router-dom"
import {useState, useEffect} from "react";
import { useNavigate } from "react-router";
import config from "../config.json"
import axios from "axios"

function MyList() {
    const [items, setItems] = useState([])
    const user = getUser()
    const name = user !== "undefined" && user ? user.name : ""
    const wishlist = user !== "undefined" && user ? user.wishlistID : ""
    const navigate = useNavigate();


    const logoutHandler = () => {
        resetUserSession();
        navigate("/", {replace: true});
    } 

    const fetchURL = config.getWishlistURL

    useEffect(() => {
        axios.get(fetchURL)
            .then((res) => {
                setItems(res.data.wishlistItems);
                console.log(items)
            })
            .catch(error => console.log(error))
    }, [setItems])
        


    return (
        <div className = "wishlist">
            <h4 id = "wishlist_banner">Are you getting ready to celebrate {name}?</h4> 
            <div id = "addItem_button">
                <Link to = "/mylist/additem"><input type = "button" value = "Add Item" /></Link>
            </div>

            <div className = "items_container">
                {items.map((item, idx) => (
                    <div className = "wishlistItem" id = {idx}>
                        <a href = {item.amazonURL} ><img src = {item.productImg} id = "pic"/></a> <br />
                        <p id = "product">{item.productName}</p><br />
                        <p id = "price">{item.price}</p>
                    </div>
                ))}
            </div>
            <input type = "button" value = "logout" onClick = {logoutHandler} />
        
        </div>
    )
}

export default MyList
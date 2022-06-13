import { Link } from "react-router-dom";
import { getUser } from "./AuthServices";

function Nav() {

    const user = getUser()
    const name = user !== "undefined" && user ? user.name : ""


    return (
        <div className = "navigation">
            <div className = "username">
                <p>Hello {name}</p>
            </div>
            <div className = "navbar" >
                <Link to = "/" className = "navlink">Home</Link>
                <Link to = "/login" className = "navlink">Login</Link>
                <Link to = "/mylist" className = "navlink">My Page</Link>
            </div>
        </div>
    )
}

export default Nav
// pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }
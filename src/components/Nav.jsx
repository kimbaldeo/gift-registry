import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import MyList from "../pages/MyWishlist";
import Home from "../pages/Home"
// import PublicRoute from "./routes/public";
// import PrivateRoute from "./routes/private";

function Nav() {
    return (
        <>
        <BrowserRouter>
            <div className = "nav_header">
                <NavLink className = "active" to = "/">Home</NavLink>
                <NavLink className = "active" to = "/register">Register</NavLink>
                <NavLink className = "active" to = "/login">Login</NavLink>
                <NavLink className = "active" to = "/mylist">My Page</NavLink>

            </div>
{/* add back publicroute and privateroute */}
            <div className = "nav_content">
                <Routes>
                    <Route exact path = "/" component = {Home} />
                    <Route path = "/register" component = {Register} /> 
                    <Route path = "/login" component = {Login} />
                    <Route path = "/mylist" component = {MyList} />
                </Routes>
            </div>
        </BrowserRouter>
        </>
    )
}

export default Nav
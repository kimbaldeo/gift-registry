import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import MyList from "../pages/MyWishlist";
import Home from "../pages/Home"
import PublicRoute from "./routes/public";
import PrivateRoute from "./routes/private";

function Nav() {
    return (
        <>
        <BrowserRouter>
            <div className = "header">
                <NavLink exact activeClassName = "active" to = "/">Home</NavLink>
                <NavLink activeClassName = "active" to = "/register">Register</NavLink>
                <NavLink activeClassName = "active" to = "/login">Login</NavLink>
                <NavLink activeClassName = "active" to = "/mylist">My Page</NavLink>

            </div>

            <div className = "content">
                <Routes>
                    <Route exact path = "/" component = {Home} />
                    <PublicRoute path = "/register" component = {Register} />
                    <PublicRoute path = "/login" component = {Login} />
                    <PrivateRoute path = "/mylist" component = {MyList} />
                </Routes>
            </div>
        </BrowserRouter>
        </>
    )
}

export default Nav
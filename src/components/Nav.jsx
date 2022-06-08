import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import Home from "../pages/Home"

function Nav() {
    return (
        <>
        <BrowserRouter>
            <div className = "header">
                <NavLink exact activeClassName = "active" to = "/">Home</NavLink>
                <NavLink activeClassName = "active" to = "/register">Register</NavLink>
                <NavLink activeClassName = "active" to = "/login">Login</NavLink>
                
            </div>

            <div className = "content">
                <Routes>
                    <Route exact path = "/" component = {Home} />
                    <Route path = "/register" component = {Register} />
                    <Route path = "/login" component = {Login} />
                </Routes>
            </div>
        </BrowserRouter>
        </>
    )
}

export default Nav
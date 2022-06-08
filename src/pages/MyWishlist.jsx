import { getUser, resetUserSession } from "../components/AuthServices"

function MyList(props) {
    const user = getUser()
    const name = user !== "undefined" && user ? user.name : ""

    const logoutHandler = () => {
        resetUserSession();
        props.history.push('/login');
    } 

    return (
        <>
        <h3>Hello {}!</h3> 
        <input type = "button" value = "logout" onclick = {logoutHandler} />
        </>
    )
}

export default MyList
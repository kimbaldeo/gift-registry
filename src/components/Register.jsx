function Register() {
    return (
        <div>
            <form onSubmit={submitHandler}>
                <h5>Register</h5>
                name: <input type = "text" value = {name} onChange = {event => setName(event.target.value)} /> <br/>
                email: <input type = "text" value={email} onChange = {event => setEmail(event.target.value)} /> <br/>
                username: <input type = "text" value={username} onChange = {event => setUsername(event.target.value)} /> <br/>
                password: <input type = "password" value = {password} onChange = {event => setPassword(event.target.value)} /> <br/>
                <input type = "submit" value = "Register" />
            </form>
        </div>
    )
}

export default Register
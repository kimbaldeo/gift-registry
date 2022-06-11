import axios from "axios";
import {useState} from "react-router-dom"
import 'react-skeleton-css/styles/skeleton.2.0.4.css'
import 'react-skeleton-css/styles/normalize.3.0.2.css'

function Contribute() {
    const [guestContrib, setGuestContrib] = useState ("")
    const [note, setNote] = useState("")
    const [firstName, setFirstName] = useState ("")
    const [lastName, setLastName] = useState ("")
    const [ccNum, setCCNum] = useState("")
    const [ccv, setCCV] = useState ("")
    const [expMonth, setExpMonth] = useState ("")
    const [expYear, setExpYear] = useState ("")
    const [zip, setZip] = useState ("")
    const [message, setMessage] = useState ("")
    
    let totalContrib

    const donateFunds = (event) => {
        axios.get("POSTMANLINK")
            .then(res => {
                totalContrib = res.data
            })
            .catch(error => {
                setMessage("Sorry, we had trouble retrieving gift data")
            })

        let newContrib = guestContrib + totalContrib

        axios.post(newContrib).then(response => {
            setMessage("Successfully Added Funds")
        }).catch(error => {
            if (error.response.status === 401 || error.response.status === 403) {
                setMessage(error.response.data.message)
            }
            else {
                setMessage("Sorry, experiencing server issues. Could not add funds. Try again later")
            }
        })
    }

    return (
        <div className = "container">
        <form className = "form" onSubmit = {donateFunds} >
            <h5>Give a gift!</h5>
            Contribution: <input className = "three columns" type = "text" value = {guestContrib} onChange = {event => setGuestContrib(event.target.value)}/> <br />
            Gift Message: <textarea className = "u-full-width" type = "text" value = {note} onChange = {event => setNote(event.target.value)}/> <br />
            <div className = "row">
                <div className = "six columns">
                    First Name: <input className = "u-full-width" type = "text" value = {firstName} onChange = {event => setFirstName(event.target.value)}/>
                </div>
                <div className = "six columns">
                    Last Name: <input className = "u-full-width" type = "text" value = {lastName} onChange = {event => setLastName(event.target.value)}/> <br />
                </div>
            </div>
            <div className = "row">
                <div className = "four columns">
                    Credit Card Number: <input className = "u-full-width" type = "text" value = {ccNum} onChange = {event => setCCNum(event.target.value)}/> 
                </div>
                <div className = "two columns">
                    CCV: <input className = "u-full-width" type = "text" value = {ccv} onChange = {event => setCCV(event.target.value)}/> <br />
                </div>
            </div>
            <div className = "row">
                <div className = "two columns">
                    Exp. Month: <input className = "u-full-width" type = "text" value = {expMonth} onChange = {event => setExpMonth(event.target.value)}/> 
                </div>
                <div className = "two columns">
                    Exp. Year: <input className = "u-full-width" type = "text" value = {expYear} onChange = {event => setExpYear(event.target.value)}/> 
                </div>
                <div className = "three columns">
                    Billing Zip Code: <input className = "u-full-width" type = "text" value = {zip} onChange = {event => setZip(event.target.value)}/> <br />
                </div>
            </div>

            <br />
            <input className = "button-primary u-pull-right" type = "button" value = "Submit" />
        </form>
        {message && <p className = "message">{message}</p>}
    </div>
    )

}
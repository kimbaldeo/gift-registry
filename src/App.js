import Nav from './components/Nav';
import Header from './components/header';
import Register from './components/Register';
import Login from './components/Login';
import config from './config.json'
import { getUser, getToken, setUserSession, resetUserSession } from './components/AuthServices';
import { useState, useEffect } from 'react';
import axios from 'axios';
import MyList from './pages/MyWishlist';



function App() {
  // const verifyTokenURL = config.verifyURL
  // const token = getToken()
  // const [authenticating, setAuthenticating] = useState(true);

  // useEffect(() => {
  //   if (token === 'undefined' || token === undefined || token === null || !token) {
  //     return;
  //   }

  //   const requestConfig = {
  //     headers: {
  //       'x-api-key': config.userAPIKey
  //     }
  //   }

  //   const requestBody = {
  //     user: getUser(),
  //     token: token
  //   }

  //   axios.post(verifyTokenURL, requestBody, requestConfig).then(response => {
  //     setUserSession(response.data.user, response.data.token);
  //     setAuthenticating(false);
  //   }).catch(() => {
  //     resetUserSession();
  //     setAuthenticating(false);
  //   })
  // }, []);

  // if (authenticating && token) {
  //   return <div className="content">authenticating...</div>
  // }

  return (
    <div className="App">
      <Header />
      <Login />
      
    </div>
  );
}

export default App;

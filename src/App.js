import Nav from './components/Nav';
import { getUser, getToken, setUserSession, resetUserSession } from './components/AuthServices';
import { useEffect } from 'react';
import axios from 'axios';



function App() {
  const verifyTokenURL = {process.env.REACT_APP_VERIFY_URL}
  const token = getToken()
  const [authenticating, setAuthenticating] = useState(true);

  useEffect(() => {
    if (token === 'undefined' || token === undefined || token === null || !token) {
      return;
    }

    const requestConfig = {
      headers: {
        'x-api-key': {REACT_APP_USER_API}
      }
    }

    const requestBody = {
      user: getUser(),
      token: token
    }

    axios.post(verifyTokenURL, requestBody, requestConfig).then(response => {
      setUserSession(response.data.user, response.data.token);
      setAuthenticating(false);
    }).catch(() => {
      resetUserSession();
      setAuthenticating(false);
    })
  }, []);

  if (authenticating && token) {
    return <div className="content">authenticating...</div>
  }

  return (
    <div className="App">
      <Nav />
    </div>
  );
}

export default App;

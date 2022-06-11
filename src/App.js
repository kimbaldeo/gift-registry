import Nav from './components/Nav';
import Header from './components/header';
import Register from './components/Register';
import Login from './components/Login';
import Home from './pages/Home';
import AddItem from './components/AddItem';
import UserWishlist from './pages/UserWishlist';
import MyList from './pages/MyWishlist';
import config from './config.json'
import { getUser, getToken, setUserSession, resetUserSession } from './components/AuthServices';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import axios from 'axios';
// import PublicRoute from "./routes/public";
// import PrivateRoute from "./routes/private";



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
      <Nav />

          <Routes>
            <Route exact path = "/" component = {Home} />
            <Route path = "/register" component = {Register} /> 
            <Route path = "/login" component = {Login} />
            <Route path = "/mylist" component = {MyList} />
            <Route path = "/mylist/additem" component = {AddItem} />
            <Route path = "/wishlist" component = {UserWishlist} />
          </Routes>
    </div>
  );
}

export default App;
// add back public and private routes

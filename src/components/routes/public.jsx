import { Navigate, Route } from 'react-router-dom';
import { getToken } from "../AuthServices"

const PublicRoute = ({ component: Component, ...rest}) => {
    return (
        <Route 
            {...rest}
            render = {props => {
            return !getToken() ? <Component {...props} />
            : <Navigate to={{ pathname: '/mylist'}} />
            }}
        />
    )
  }
  
  export default PublicRoute
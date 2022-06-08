import { Redirect, Route } from 'react-router-dom';
import { getToken } from "../AuthServices"

const PrivateRoute = ({ component: Component, ...rest}) => {
  return (
    <Route 
      {...rest}
      render={props => {
        return getToken() ? <Component {...props} />
        : <Redirect to={{ pathname: '/login'}} />
      }}
    />
  )
}

export default PrivateRoute
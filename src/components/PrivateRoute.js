import {Redirect,Route} from 'react-router-dom'
import { useStorage } from "../context/useStorage";

export default function PrivateRoute  ({component: Component, ...rest}) {
    const { isLogin } = useStorage();         
    return (
        <Route {...rest} render={props => (
            (isLogin)?
            <Component {...props} />
            : <Redirect to="/authentication/login" />)}
        />); 
};

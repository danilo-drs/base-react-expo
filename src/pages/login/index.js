import React, { useContext } from "react";
import {
    BrowserRouter as Router,
    useHistory,
    useLocation
} from "react-router-dom";
import { EnvironmentContext } from "../../common/context-layers/environment";


const component = function LoginPage() {
    const environmentContext = useContext(EnvironmentContext)

    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };
    let login = () => {
        history.replace(from);
        environmentContext.setAuth({ authenticated: true })
    };

    return (
        <div>
            <p>You must log in to view the page at {from.pathname}</p>
            <button onClick={login}>Log in</button>
        </div>
    );
}
const sidebarItem = (props) => <Link to={props.path}>Login</Link>

export const Login = {
    component,
    sidebarItem,
}
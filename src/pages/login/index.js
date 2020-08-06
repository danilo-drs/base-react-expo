import React, { useContext } from "react";
import {
    BrowserRouter as Router,
    useHistory
} from "react-router-dom";
import { EnvironmentContext } from "../../common/context-layers/environment";
import { UiContext } from "../../common/context-layers/ui";
import LoginView from "./view";
import LoginService from './../../services/login'

const component = function LoginPage() {
    const environmentContext = useContext(EnvironmentContext)
    const uiContext = useContext(UiContext)

    let history = useHistory();

    let { from } = { pathname: "/" };
    let loginEvent = (e) => {
        LoginService.login()
            .then(() => {
                history.push(from);
                environmentContext.setAuth({ authenticated: true })
            })
    };

    return (
        <LoginView loginEvent={loginEvent} intl={uiContext.intl} />
    );
}
const sidebarItem = (props) => <Link to={props.path}>Login</Link>

export const Login = {
    component,
    sidebarItem,
}
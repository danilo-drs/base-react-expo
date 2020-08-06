import React from "react";
import { Route } from "react-router-dom";

import * as Pages from './../pages'

console.log('Pages', Pages)

import {
    Home,
    Location,
    Login
} from './../pages';
import { AuthRoute } from "./auth-route";

console.log('Home', Home)
console.log('Location', Location)

const routes = [
    {
        path: "/",
        exact: true,
        sidebar: () => Home.sidebarItem('/'),
        component: Login.component,
        authenticated: false
    },
    {
        path: "/location",
        sidebar: () => Location.sidebarItem('/'),
        component: Location.component,
        authenticated: true
    },
    {
        path: "/login",
        sidebar: () => Login.sidebarItem('/'),
        component: Login.component,
        authenticated: false
    }
];


export function Registry() {
    return (routes.map((route, index) =>
        route.authenticated ?
            (<AuthRoute
                key={index}
                path={route.path}
                exact={route.exact}
            ><route.component /> </AuthRoute>) :
            (<Route
                key={index}
                path={route.path}
                exact={route.exact}
            ><route.component /></Route>)
    ))
}

export function RouteList() {
    return (routes.map((route, index) => (
        <route.sidebar />
    )))
}

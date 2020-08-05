import React from "react";
import { Route } from "react-router-dom";

import * as Pages from './../pages'

console.log('Pages', Pages)

import {
    Home,
    Location
} from './../pages';

console.log('Home', Home)
console.log('Location', Location)

const routes = [
    {
        path: "/",
        exact: true,
        sidebar: () => Home.sidebarItem('/'),
        component: Home.component
    },
    {
        path: "/location",
        sidebar: () => Location.sidebarItem('/'),
        component: Location.component,
        authenticated: true
    }
];


export  function Registry() {
    return (routes.map((route, index) => (
        <Route
            key={index}
            path={route.path}
            exact={route.exact}
            children={<route.component />}
        />
    )))
}

export function RouteList() {
    return (routes.map((route, index) => (
        <route.sidebar />
    )))
}

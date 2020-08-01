import React from 'react'
import { Link } from './../../routes/dep'

const component = function Location(props) {
    return (<h1>LOCATION</h1>)
}

const sidebarItem = (props) => <Link to={props.path}>Location</Link>

export const Location = {
    component,
    sidebarItem,
}
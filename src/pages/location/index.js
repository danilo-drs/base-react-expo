import React from 'react'
import { Link } from './../../routes/dep'
import LocationView from './view'

const component = function Location(props) {
    return (<LocationView />)
}

const sidebarItem = (props) => <Link to={props.path}>Location</Link>

export const Location = {
    component,
    sidebarItem,
}
import React from 'react'
import { Link } from './../../routes/dep'

const component = function Home(props) {
    return (<h1>HOME</h1>)
}

const sidebarItem = (props) => <Link to={props.path}>Home</Link>
const exact = true

export const Home = {
    component,
    sidebarItem,
    exact
}



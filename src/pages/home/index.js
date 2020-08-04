import React, { useContext } from 'react'
import { Link } from './../../routes/dep'
import HomeView from './view'
import { UiContext } from '../../common/context-layers/ui'


const component = function Home(props) {
    const uiContext = useContext(UiContext)
    console.log('uiContext', uiContext)
    const { language } = (uiContext.uiLayerData || {})
    const { setLanguage } = (uiContext || {})
    return (
        <HomeView
            language={language}
            setLanguage={setLanguage}
        />
    )
}

const sidebarItem = (props) => <Link to={props.path}>Home</Link>
const exact = true

export const Home = {
    component,
    sidebarItem,
    exact
}
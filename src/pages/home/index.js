import React, { useContext } from 'react'
import { Link } from './../../routes/dep'
import HomeView from './view'
import { UiContext } from '../../common/context-layers/ui'
import { EnvironmentContext } from '../../common/context-layers/environment'


const component = function Home(props) {
    const uiContext = useContext(UiContext)
    const envContext = useContext(EnvironmentContext)
    const { language, setLanguage } = (uiContext || {})

    return (
        <HomeView
            language={language}
            setLanguage={setLanguage}
            envTest={envContext.authenticated ? 'true' : 'false'}
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
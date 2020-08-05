import React, { useContext } from 'react';
import LayoutView from './view'
import { EnvironmentContext } from '../../common/context-layers/environment';

export default function Layout(props) {
    const envContext = useContext(EnvironmentContext)
    return (<LayoutView
        showSideBar= {envContext.authenticated}
        navList={props.navList}
        main={props.main}
    />)
}
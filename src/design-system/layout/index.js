import React from 'react';
import LayoutView from './view'

export default function Layout(props) {
    return (<LayoutView
        navList={props.navList}
        main={props.main}
    />)
}
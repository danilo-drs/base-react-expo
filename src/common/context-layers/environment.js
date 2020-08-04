import React, { useState } from 'react';

const defaultEnvironmentData = {
    authenticated: false,
    envTest: 'this came from env layer',
    accessCache: []
}

export const EnvironmentContext = React.createContext()
EnvironmentContext.displayName = 'environmentContextLayer'

export const EnvironmentContextLayer = (props) => {
    const [environmentLayerData, setEnvironmentLayerData] = useState(defaultEnvironmentData)
    const setAuth = (auth) => setEnvironmentLayerData({ ...environmentLayerData, ...auth })
    const environmentContextValue = { ...environmentLayerData, setAuth }

    return (
        <EnvironmentContext.Provider value={environmentContextValue}>
            {props.children}
        </EnvironmentContext.Provider>
    )
}
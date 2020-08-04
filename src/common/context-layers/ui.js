import React, { useState } from "react";

export const defaultUiData = {
    theme: false,
    language: 'pt-br',
    lastRoute: '/',
    componentVariables: []
}

export const UiContext = React.createContext()
UiContext.displayName = 'uiContextLayer'


export const UiContextLayer = (props) => {
    const [uiLayerData, setUiData] = useState(defaultUiData);
    const setLanguage = (language) => setUiData({ ...setUiData, language })

    const uiContextValue = { ...uiLayerData, setLanguage };

    return (
        <UiContext.Provider value={uiContextValue}>
            {props.children}
        </UiContext.Provider>
    )
}
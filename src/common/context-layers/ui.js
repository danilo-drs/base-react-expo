import React from "react";

export const defaultUiData = {
    theme: false,
    language: 'pt-br',
    lastRoute: '/',
    componentVariables: []
}

export const UiContext = React.createContext()
UiContext.displayName = 'uiContextLayer'

export const UiContextProvider = UiContext.Provider


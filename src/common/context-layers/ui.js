import React, { useState } from "react";
import defaultLanguage from './../intl/pt-br.json'

// import { createIntlCache, createIntl, IntlProvider } from "react-intl";
// const cache = createIntlCache();

// const loadLocaleData = (locale) => import(`./../intl/${locale}.json`);
// const messages = loadLocaleData(locale);

// const intl = createIntl(
//     {
//         locale: 'pt-br',
//         defaultLocale: 'pt-br',
//         messages: defaultLanguage,
//     },
//     cache
// );


export const defaultUiData = {
    theme: false,
    language: 'pt-br',
    lastRoute: '/',
    componentVariables: [],
    messages: defaultLanguage
}

export const UiContext = React.createContext()
UiContext.displayName = 'uiContextLayer'


export const UiContextLayer = (props) => {
    const [uiLayerData, setUiData] = useState(defaultUiData);
    const setLanguage = (language) => setUiData({ ...setUiData, language })
    const uiContextValue = { ...uiLayerData, setLanguage };

    return (
        <UiContext.Provider value={uiContextValue}>
            {/* <IntlProvider locale={uiLayerData.language} key={uiLayerData.language} messages={uiLayerData.messages}> */}
                {props.children}
            {/* </IntlProvider> */}
        </UiContext.Provider>
    )
}

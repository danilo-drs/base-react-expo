import React from "react";
const serializeAuth = (auth) => ({
    authenticated: (auth.authenticated || false),
    accessCache: (auth.accessCache || [])
})

const defaultEnvironmentData = {
    auth: {
        authenticated: false,
        accessCache: []
    },
    setAuth: (auth) => this.auth = serializeAuth(auth)
}

export const EnvironmentContext = React.createContext(defaultEnvironmentData);
EnvironmentContext.displayName = 'environmentContextLayer'
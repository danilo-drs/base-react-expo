import React, { useContext } from 'react'
import { EnvironmentContext } from '../common/context-layers/environment'
import { Route, Redirect } from 'react-router-dom'

export function AuthRoute({ component: Component, path, exact }) {
  const envContext = useContext(EnvironmentContext)
  return (
    <Route path={path} exact={exact}
      render={(props) => envContext.authenticated
        ? <Component {...props} />
        : <Redirect to={'/login'} />}
    />)
}
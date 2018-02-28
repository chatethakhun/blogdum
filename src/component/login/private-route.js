import {
    Redirect,
    Route
} from 'react-router-dom'

import React from 'react'

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => {
     // console.log("TOKEN_AUTH ====>", localStorage.getItem("token"))
      return (
          (localStorage.getItem("token") !== null) ? (
            <Component {...props}/>
          ) : (
            <Redirect to={{
              pathname: '/login',
            }}/>
          )
      )
    }}/>
  )
export const PublicRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
      (localStorage.getItem("token") === null) ? (
        <Component {...props}/>
      ) : (
        <Redirect to={{
          pathname: '/',
        }}/>
      )
    )}/>
  )
  
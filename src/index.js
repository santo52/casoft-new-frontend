import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { ThemeProvider } from 'styled-components'
import * as serviceWorker from './serviceWorker';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import App from './app'
import Login from './modules/login/containers/login'




const theme = {
  colors: {
    primary: '#0070f3'
  }
}

function Index() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
  }, [])

  if (loading) {
    return <div>Cargando</div>
  }

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <PrivateRoutes >
            <App />
          </PrivateRoutes>
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

const PrivateRoutes = ({ children, ...rest }) => {

  return (
    <Route
      {...rest}
      render={({ location }) =>
        localStorage.getItem('isAuthenticated') ? (
          children
        ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
      }
    />
  )
}




ReactDOM.render(<Index />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


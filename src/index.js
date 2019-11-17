import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { ThemeProvider } from 'styled-components'
import * as serviceWorker from './serviceWorker';
import Layout from './components/layout'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

const theme = {
  colors: {
    primary: '#0070f3'
  }
}

function App() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
  }, [])

  if(loading){
    return <div>Cargando</div>
  }

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        prueba
      </Layout>
    </ThemeProvider>
  )
}


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


import React from 'react'
import Layout from './components/layout'

import { Route } from "react-router-dom";

import Home from './home/containers/home'
import RRHH from './rrhh/containers/rrhh'

const App = () => {
  return (
    <Layout>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/rrhh">
        <RRHH />
      </Route>
    </Layout>
  )
}

export default App
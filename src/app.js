import React from 'react'
import Layout from './components/layout'

import { Route } from "react-router-dom"

import Home from './modules/home/containers/home'
import Config from './routes/config'
import RRHH from "./routes/rrhh"


const App = () => {
  return (
    <Layout>

      <Route exact path="/">
        <Home />
      </Route>

      <RRHH />
      <Config />
      
    </Layout>
  )
}

export default App
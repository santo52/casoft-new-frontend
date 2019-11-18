import React from 'react'
import Layout from './components/layout'

import { Route } from "react-router-dom";

import Home from './home/containers/home'
import UserList from './rrhh/containers/users/list'
import UserDetail from './rrhh/containers/users/detail'
import Nomina from './rrhh/containers/nomina/generate'
import Bancos from './config/bancos/containers/bancos'
import BancosDetalle from './config/bancos/containers/detail'

const App = () => {
  return (
    <Layout>
      
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/usuarios">
        <UserList />
      </Route>
      <Route path="/usuarios/:id">
        <UserDetail />
      </Route>

      <Route exact path="/nomina">
        <Nomina />
      </Route>


      <Route exact path="/bancos">
        <Bancos />
      </Route>
      <Route path="/bancos/:id">
        <BancosDetalle />
      </Route>


    </Layout>
  )
}

export default App
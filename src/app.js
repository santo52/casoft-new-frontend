import React from 'react'
import Layout from './components/layout'

import { Route } from "react-router-dom";

import Home from './home/containers/home'
import UserList from './rrhh/containers/users/list'
import UserDetail from './rrhh/containers/users/detail'
import Nomina from './rrhh/containers/nomina/generate'

import Bancos from './config/bancos/containers/bancos'
import BancosDetail from './config/bancos/containers/detail'

import DocumentTypes from './config/tipos_documento/containers/list'
import DocumentTypeDetail from './config/tipos_documento/containers/detail'

import Cities from './config/ubicacion/ciudades/containers/list'
import CityDetail from './config/ubicacion/ciudades/containers/detail'

import Departments from './config/ubicacion/departamentos/containers/list'
import DepartmentDetail from './config/ubicacion/departamentos/containers/detail'

import Country from './config/ubicacion/paises/containers/list'
import CountryDetail from './config/ubicacion/paises/containers/detail'

import MenuList from './config/menus/containers/list'
import MenuDetail from './config/menus/containers/detail'

import ParafiscalList from './config/parafiscales/containers/list'
import ParafiscalDetail from './config/parafiscales/containers/detail'


import UploadIncomeDeparture from './rrhh/containers/huellero/upload'
import IncomeDeparture from './rrhh/containers/huellero/list'


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
        <BancosDetail />
      </Route>

      <Route exact path="/tipos-de-documento">
        <DocumentTypes />
      </Route>
      <Route path="/tipos-de-documento/:id">
        <DocumentTypeDetail />
      </Route>

      <Route exact path="/ciudades">
        <Cities />
      </Route>
      <Route path="/ciudades/:id">
        <CityDetail />
      </Route>

      <Route exact path="/departamentos">
        <Departments />
      </Route>
      <Route path="/departamentos/:id">
        <DepartmentDetail />
      </Route>

      <Route exact path="/paises">
        <Country />
      </Route>
      <Route path="/paises/:id">
        <CountryDetail />
      </Route>

      <Route exact path="/menus">
        <MenuList />
      </Route>
      <Route path="/menus/:id">
        <MenuDetail />
      </Route>


      <Route exact path="/parafiscales">
        <ParafiscalList />
      </Route>
      <Route path="/parafiscales/:id">
        <ParafiscalDetail />
      </Route>

      <Route exact path="/huellero">
        <IncomeDeparture />
      </Route>
      <Route exact path="/huellero/subir">
        <UploadIncomeDeparture />
      </Route>

    </Layout>
  )
}

export default App
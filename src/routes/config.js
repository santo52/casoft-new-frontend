import React from 'react'
import { Route } from "react-router-dom";
import Bancos from '../modules/config/bancos/containers/bancos'
import BancosDetail from '../modules/config/bancos/containers/detail'

import DocumentTypes from '../modules/config/tipos_documento/containers/list'
import DocumentTypeDetail from '../modules/config/tipos_documento/containers/detail'

import ContractType from '../modules/config/tipos_contrato/containers/list'
import ContractTypeDetail from '../modules/config/tipos_contrato/containers/detail'

import AbsenteeismList from '../modules/config/tipos_ausentismo/containers/list'
import AbsenteeismDetail from '../modules/config/tipos_ausentismo/containers/detail'

import Cities from '../modules/config/ubicacion/ciudades/containers/list'
import CityDetail from '../modules/config/ubicacion/ciudades/containers/detail'

import Departments from '../modules/config/ubicacion/departamentos/containers/list'
import DepartmentDetail from '../modules/config/ubicacion/departamentos/containers/detail'

import Country from '../modules/config/ubicacion/paises/containers/list'
import CountryDetail from '../modules/config/ubicacion/paises/containers/detail'

import MenuList from '../modules/config/menus/containers/list'
import MenuDetail from '../modules/config/menus/containers/detail'

import ParafiscalList from '../modules/config/parafiscales/containers/list'
import ParafiscalDetail from '../modules/config/parafiscales/containers/detail'

import VariableList from '../modules/config/variables/containers/list'
import VariableDetail from '../modules/config/variables/containers/detail'



const Config = () => (
  <React.Fragment>

    <Route exact path="/config/bancos">
      <Bancos />
    </Route>

    <Route path="/config/bancos/:id">
      <BancosDetail />
    </Route>

    <Route exact path="/config/tipos-de-contrato">
      <ContractType />
    </Route>

    <Route path="/config/tipos-de-contrato/:id">
      <ContractTypeDetail />
    </Route>

    <Route exact path="/config/tipos-de-documento">
      <DocumentTypes />
    </Route>

    <Route path="/config/tipos-de-documento/:id">
      <DocumentTypeDetail />
    </Route>

    <Route exact path="/config/tipos-de-ausentismo">
      <AbsenteeismList />
    </Route>

    <Route path="/config/tipos-de-ausentismo/:id">
      <AbsenteeismDetail />
    </Route>

    <Route exact path="/config/ubicacion/ciudades">
      <Cities />
    </Route>

    <Route path="/config/ubicacion/ciudades/:id">
      <CityDetail />
    </Route>

    <Route exact path="/config/ubicacion/departamentos">
      <Departments />
    </Route>

    <Route path="/config/ubicacion/departamentos/:id">
      <DepartmentDetail />
    </Route>

    <Route exact path="/config/ubicacion/paises">
      <Country />
    </Route>

    <Route path="/config/ubicacion/paises/:id">
      <CountryDetail />
    </Route>

    <Route exact path="/config/menus">
      <MenuList />
    </Route>

    <Route path="/config/menus/:id">
      <MenuDetail />
    </Route>

    <Route exact path="/config/parafiscales">
      <ParafiscalList />
    </Route>

    <Route path="/config/parafiscales/:id">
      <ParafiscalDetail />
    </Route>

    <Route exact path="/config/variables">
      <VariableList />
    </Route>

    <Route path="/config/variables/:id">
      <VariableDetail />
    </Route>

  </React.Fragment>
)



export default Config
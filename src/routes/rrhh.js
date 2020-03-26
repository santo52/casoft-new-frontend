import React from 'react'
import { Route } from "react-router-dom";

import UploadIncomeDeparture from '../modules/rrhh/huellero/containers/upload'
import IncomeDeparture from '../modules/rrhh/huellero/containers/list'

import UploadExtraHours from '../modules/rrhh/horas_extra/containers/upload'
import ExtraHours from '../modules/rrhh/horas_extra/containers/list'
import ExtraHourDetail from '../modules/rrhh/horas_extra/containers/detail'

import Ausentismo from '../modules/rrhh/ausentismo/containers/list'
import DetalleAusentismo from '../modules/rrhh/ausentismo/containers/detail'

import UserList from '../modules/rrhh/users/containers/list'
import UserDetail from '../modules/rrhh/users/containers/detail'
import Nomina from '../modules/rrhh/nomina/generate'


const RRHH = () => (
  <React.Fragment>

    <Route path="/rrhh/usuarios/:id">
      <UserDetail />
    </Route>

    <Route exact path="/rrhh/nomina">
      <Nomina />
    </Route>

    <Route exact path="/rrhh/usuarios">
        <UserList />
      </Route>

      <Route exact path="/rrhh/huellero">
        <IncomeDeparture />
      </Route>
      <Route exact path="/rrhh/huellero/subir">
        <UploadIncomeDeparture />
      </Route>

      <Route exact path="/rrhh/horas-extra">
        <ExtraHours />
      </Route>

      <Route path="/rrhh/horas-extra/:id">
        <ExtraHourDetail />
      </Route>

      <Route exact path="/rrhh/horas-extra/subir">
        <UploadExtraHours />
      </Route>



      <Route exact path="/rrhh/ausentismo">
        <Ausentismo />
      </Route>

      <Route path="/rrhh/ausentismo/:id">
        <DetalleAusentismo />
      </Route>

    

  </React.Fragment>
)



export default RRHH
import React, { useState, useEffect } from 'react';
import {injectState} from 'freactal'
import withState from '../freactals/absencesTypes'


import { Link } from "react-router-dom";

import {
  Table,
  Card,
  Button,
  CardBody,
  CardHeader,
  Input
} from 'reactstrap';


const AbsenteeismList = ({ state, effects }) => {

  const { absenceTypes } = state


  useEffect(() => {
    effects.loadAll()
  }, [])

  return (
    <Card>
      <CardHeader className="flex">
        Tipos de ausentismo
        <div className="card-header-right">
          <Link to={`/tipos-de-ausentismo/nuevo`}>
            <Button color='info' size="sm" >Nuevo</Button>
          </Link>
        </div>
      </CardHeader>
      <CardBody>
        <Table responsive>
          <thead>
            <tr>
              <th>id</th>
              <th>Nombre</th>
              <th>Porcentaje pagado</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {absenceTypes.map(absenceType =>
              <tr key={absenceType._id} >
                <td>{absenceType._id}</td>
                <td>{absenceType.name}</td>
                <td>{absenceType.percentPaid}%</td>
                <td>
                  <Link to={`/tipos-de-ausentismo/${absenceType._id}`}>
                    <Button color="primary" size="sm">Editar</Button>
                  </Link>
                  <Button onClick={() => effects.deleteSingle(absenceType._id)} color="danger" size="sm">Eliminar</Button>
                </td>
              </tr>
            )}

          </tbody>
        </Table>
      </CardBody>
    </Card>
  )
}

export default withState(injectState(AbsenteeismList))
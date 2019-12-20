import React, { useState, useEffect } from 'react';
import {injectState} from 'freactal'
import withState from '../freactals/horas_extra'


import { Link } from "react-router-dom";

import {
  Table,
  Card,
  Button,
  CardBody,
  CardHeader,
  Input
} from 'reactstrap';


const UploadedList = ({ state, effects }) => {

  const { extraHours } = state

  useEffect(() => {
    effects.loadAll()
  }, [])
  

  return (
    <Card>
      <CardHeader className="flex">
        Horas extra
        <div className="card-header-right">
          <Link to={`/rrhh/horas-extra/nuevo`}>
            <Button color="info" size="sm">Nuevo</Button>
          </Link>
          <Link to={`/rrhh/horas-extra/subir`}>
            <Button color="success" size="sm">Importar</Button>
          </Link>
          
        </div>
      </CardHeader>
      <CardBody>
        <Table responsive>
          <thead>
            <tr>
              <th>Usuario</th>
              <th>Fecha</th>
              <th>Hora de entrada</th>
              <th>Hora de Salida</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {extraHours.map(extraHour =>
              <tr key={extraHour._id} >
                <td>{extraHour.fullName}</td>
                <td>{extraHour.startDate}</td>
                <td>{extraHour.startHour}</td>
                <td>{extraHour.finishHour}</td>
                <td>
                  <Link to={`/rrhh/horas-extra/${extraHour._id}`} >
                    <Button color="primary" size="sm">Editar</Button>
                  </Link>
                  <Button onClick={() => effects.deleteSingle(extraHour._id)} color="danger" size="sm">Eliminar</Button>
                </td>
              </tr>
            )}

          </tbody>
        </Table>
      </CardBody>
    </Card>
  )
}

export default withState(injectState(UploadedList))
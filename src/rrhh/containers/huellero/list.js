import React, { useState, useEffect } from 'react';
import {injectState} from 'freactal'
import withState from '../../freactals/huellero'


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

  const { incomesDepartures } = state

  useEffect(() => {
    effects.loadAll()
  }, [])

  return (
    <Card>
      <CardHeader className="flex">
        Registros huellero
        <div className="card-header-right">
          <Link to={`/huellero/subir`}>
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
            {incomesDepartures.map(incomeDeparture =>
              <tr key={incomeDeparture._id} >
                <td>{incomeDeparture.fullName}</td>
                <td>{incomeDeparture.startDate}</td>
                <td>{incomeDeparture.startHour}</td>
                <td>{incomeDeparture.finishHour}</td>
                <td>
                  <Button onClick={() => effects.deleteSingle(incomeDeparture._id)} color="danger" size="sm">Eliminar</Button>
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
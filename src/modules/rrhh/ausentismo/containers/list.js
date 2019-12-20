import React, { useState, useEffect } from 'react';
import {injectState} from 'freactal'
import withState from '../freactals/ausentismo'


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

  const { listaAusentismo, tiposAusentismo } = state

  useEffect(() => {
    effects.loadAll()
  }, [])

  const getAbsenseName = (id) => {
    const absence = tiposAusentismo.find(tipo => tipo._id === id)
    return absence ? absence.name : ''
  }
  
/**
 * 
 * start: { type: String, required: true },
  finish: { type: String, required: true },
  time: { type: Number, required: true },
  absenceTypeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'AbsenceType'
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  deleted: { type: Boolean, default: false }
 */
  return (
    <Card>
      <CardHeader className="flex">
        Ausentismo
        <div className="card-header-right">
          <Link to={`/rrhh/ausentismo/nuevo`}>
            <Button color="info" size="sm">Nuevo</Button>
          </Link>          
        </div>
      </CardHeader>
      <CardBody>
        <Table responsive>
          <thead>
            <tr>
              <th>Usuario</th>
              <th>Fecha</th>
              <th>Hora de inicio</th>
              <th>Tiempo solicitado</th>
              <th>Motivo</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {listaAusentismo.map(item =>
              <tr key={item._id} >
                <td>{item.fullName}</td>
                <td>{item.startDate}</td>
                <td>{item.startHour}</td>
                <td>{item.time} horas</td>
                <td>{getAbsenseName(item.absenceTypeId)}</td>
                <td>
                  <Link to={`/rrhh/ausentismo/${item._id}`} >
                    <Button color="primary" size="sm">Editar</Button>
                  </Link>
                  <Button onClick={() => effects.deleteSingle(item._id)} color="danger" size="sm">Eliminar</Button>
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
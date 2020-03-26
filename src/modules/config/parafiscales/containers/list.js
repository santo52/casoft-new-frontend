import React, { useState, useEffect } from 'react';
import { injectState } from 'freactal'
import withState from '../freactals/parafiscales'
import { tt } from '../../../../utils/locales'

import { Link } from "react-router-dom";

import {
  Table,
  Card,
  Button,
  CardBody,
  CardHeader,
  Input
} from 'reactstrap';
import { tsThisType } from '@babel/types';


const ParafiscalList = ({ state, effects }) => {

  const { parafiscals } = state


  useEffect(() => {
    effects.loadAll()
  }, [])

  return (
    <Card>
      <CardHeader className="flex">
        Parafiscales
        <div className="card-header-right">
          <Link to={`/config/parafiscales/nuevo`}>
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
              <th>Porcentaje</th>
              <th>¿Es un descuento?</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {parafiscals.map(parafiscal =>
              <tr key={parafiscal._id} >
                <td>{parafiscal._id}</td>
                <td>{parafiscal.name}</td>
                <td>{parafiscal.employeePercentage + parafiscal.companyPercentage}% {tt(parafiscal.chronology)}</td>
                <td>{parafiscal.isDiscount ? 'Si' : 'No'}</td>
                <td>
                  <Link to={`/config/parafiscales/${parafiscal._id}`}>
                    <Button color="primary" size="sm">Editar</Button>
                  </Link>
                  <Button onClick={() => effects.deleteSingle(parafiscal._id)} color="danger" size="sm">Eliminar</Button>
                </td>
              </tr>
            )}

          </tbody>
        </Table>
      </CardBody>
    </Card>
  )
}

export default withState(injectState(ParafiscalList))
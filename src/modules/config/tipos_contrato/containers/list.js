import React, { useState, useEffect } from 'react';
import {injectState} from 'freactal'
import withState from '../freactals/tiposContrato'


import { Link } from "react-router-dom";

import {
  Table,
  Card,
  Button,
  CardBody,
  CardHeader,
  Input
} from 'reactstrap';


const ContractTypes = ({ state, effects }) => {

  const { contractTypes } = state


  useEffect(() => {
    effects.loadAll()
  }, [])

  return (
    <Card>
      <CardHeader className="flex">
        Tipos de contrato
        <div className="card-header-right">
          <Link to={`/config/tipos-de-contrato/nuevo`}>
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
              <th></th>
            </tr>
          </thead>
          <tbody>
            {contractTypes.map(contractType =>
              <tr key={contractType._id} >
                <td>{contractType._id}</td>
                <td>{contractType.name}</td>
                <td>
                  <Link to={`/config/tipos-de-contrato/${contractType._id}`}>
                    <Button color="primary" size="sm">Editar</Button>
                  </Link>
                  <Button onClick={() => effects.deleteSingle(contractType._id)} color="danger" size="sm">Eliminar</Button>
                </td>
              </tr>
            )}

          </tbody>
        </Table>
      </CardBody>
    </Card>
  )
}

export default withState(injectState(ContractTypes))
import React, { useState, useEffect } from 'react';
import {injectState} from 'freactal'
import withState from '../freactals/bancos'


import { Link } from "react-router-dom";

import {
  Table,
  Card,
  Button,
  CardBody,
  CardHeader,
  Input
} from 'reactstrap';


const Bancos = ({ state, effects }) => {

  const { banks } = state

  useEffect(() => {
    effects.loadBanks()
  }, [])

  return (
    <Card>
      <CardHeader className="flex align-items-center">
        Bancos
        <div className="card-header-right">
          <Link to={`/bancos/nuevo`}>
            <Button color='success' size="sm" >Nuevo</Button>
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
            {banks.map(bank =>
              <tr key={bank._id} >
                <td>{bank._id}</td>
                <td>{bank.name}</td>
                <td>
                  <Link to={`/bancos/${bank._id}`}>
                    <Button color="primary" size="sm">Editar</Button>
                  </Link>
                  <Button onClick={() => effects.deleteBank(bank._id)} color="danger" size="sm">Eliminar</Button>
                </td>
              </tr>
            )}

          </tbody>
        </Table>
      </CardBody>
    </Card>
  )
}

export default withState(injectState(Bancos))
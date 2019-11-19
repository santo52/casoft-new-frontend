import React, { useState, useEffect } from 'react';
import {injectState} from 'freactal'
import withState from '../freactals/parafiscales'


import { Link } from "react-router-dom";

import {
  Table,
  Card,
  Button,
  CardBody,
  CardHeader,
  Input
} from 'reactstrap';


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
            {parafiscals.map(parafiscal =>
              <tr key={parafiscal._id} >
                <td>{parafiscal._id}</td>
                <td>{parafiscal.name}</td>
                <td>
                  <Link to={`/parafiscales/${parafiscal._id}`}>
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
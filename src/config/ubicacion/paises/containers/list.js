import React, { useState, useEffect } from 'react';
import {injectState} from 'freactal'
import withState from '../freactals/paises'


import { Link } from "react-router-dom";

import {
  Table,
  Card,
  Button,
  CardBody,
  CardHeader,
  Input
} from 'reactstrap';


const Country = ({ state, effects }) => {

  const { countries } = state

  useEffect(() => {
    effects.loadAll()
  }, [])

  return (
    <Card>
      <CardHeader className="flex">
        Paises
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
            {countries.map(country =>
              <tr key={country._id} >
                <td>{country._id}</td>
                <td>{country.name}</td>
                <td>
                  <Link to={`/paises/${country._id}`}>
                    <Button color="primary" size="sm">Editar</Button>
                  </Link>
                  <Button onClick={() => effects.deleteSingle(country._id)} color="danger" size="sm">Eliminar</Button>
                </td>
              </tr>
            )}

          </tbody>
        </Table>
      </CardBody>
    </Card>
  )
}

export default withState(injectState(Country))
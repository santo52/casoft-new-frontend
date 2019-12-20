import React, { useState, useEffect } from 'react';
import {injectState} from 'freactal'
import withState from '../freactals/ciudades'


import { Link } from "react-router-dom";

import {
  Table,
  Card,
  Button,
  CardBody,
  CardHeader,
  Input
} from 'reactstrap';


const Cities = ({ state, effects }) => {

  const { cities } = state


  useEffect(() => {
    effects.loadAll()
  }, [])

  return (
    <Card>
      <CardHeader className="flex">
        Ciudades
        <div className="card-header-right">
          <Link to={`/config/ubicacion/ciudades/nuevo`}>
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
            {cities.map(city =>
              <tr key={city._id} >
                <td>{city._id}</td>
                <td>{city.name}</td>
                <td>
                  <Link to={`/config/ubicacion/ciudades/${city._id}`}>
                    <Button color="primary" size="sm">Editar</Button>
                  </Link>
                  <Button onClick={() => effects.deleteSingle(city._id)} color="danger" size="sm">Eliminar</Button>
                </td>
              </tr>
            )}

          </tbody>
        </Table>
      </CardBody>
    </Card>
  )
}

export default withState(injectState(Cities))
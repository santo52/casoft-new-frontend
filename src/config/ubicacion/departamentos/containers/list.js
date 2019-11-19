import React, { useState, useEffect } from 'react';
import {injectState} from 'freactal'
import withState from '../freactals/departamentos'


import { Link } from "react-router-dom";

import {
  Table,
  Card,
  Button,
  CardBody,
  CardHeader,
  Input
} from 'reactstrap';


const Departments = ({ state, effects }) => {

  const { departments } = state


  useEffect(() => {
    effects.loadAll()
  }, [])

  return (
    <Card>
      <CardHeader className="flex">
        Departamentos
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
            {departments.map(department =>
              <tr key={department._id} >
                <td>{department._id}</td>
                <td>{department.name}</td>
                <td>
                  <Link to={`/departamentos/${department._id}`}>
                    <Button color="primary" size="sm">Editar</Button>
                  </Link>
                  <Button onClick={() => effects.deleteSingle(department._id)} color="danger" size="sm">Eliminar</Button>
                </td>
              </tr>
            )}

          </tbody>
        </Table>
      </CardBody>
    </Card>
  )
}

export default withState(injectState(Departments))
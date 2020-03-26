import React, { useState, useEffect } from 'react';
import { injectState } from 'freactal'
import withState from '../freactals/variables'
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


const VariableList = ({ state, effects }) => {

  const { variables } = state


  useEffect(() => {
    effects.loadAll()
  }, [])

  return (
    <Card>
      <CardHeader className="flex">
        Variables globales
        <div className="card-header-right">
          <Link to={`/config/variables/nuevo`}>
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
              <th>Valor</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {variables.map(variable =>
              <tr key={variable._id} >
                <td>{variable._id}</td>
                <td>{variable.name}</td>
                <td>{variable.value}</td>
                <td>
                  <Link to={`/config/variables/${variable._id}`}>
                    <Button color="primary" size="sm">Editar</Button>
                  </Link>
                  {!variable.fixed && 
                    <Button onClick={() => effects.deleteSingle(variable._id)} color="danger" size="sm">Eliminar</Button>
                  }
                </td>
              </tr>
            )}

          </tbody>
        </Table>
      </CardBody>
    </Card>
  )
}

export default withState(injectState(VariableList))
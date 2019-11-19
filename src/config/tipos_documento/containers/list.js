import React, { useState, useEffect } from 'react';
import {injectState} from 'freactal'
import withState from '../freactals/tiposDocumento'


import { Link } from "react-router-dom";

import {
  Table,
  Card,
  Button,
  CardBody,
  CardHeader,
  Input
} from 'reactstrap';


const DocumentTypes = ({ state, effects }) => {

  const { documentTypes } = state


  useEffect(() => {
    effects.loadAll()
  }, [])

  return (
    <Card>
      <CardHeader className="flex">
        Tipos de documento
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
            {documentTypes.map(documentType =>
              <tr key={documentType._id} >
                <td>{documentType._id}</td>
                <td>{documentType.name}</td>
                <td>
                  <Link to={`/tipos-de-documento/${documentType._id}`}>
                    <Button color="primary" size="sm">Editar</Button>
                  </Link>
                  <Button onClick={() => effects.deleteSingle(documentType._id)} color="danger" size="sm">Eliminar</Button>
                </td>
              </tr>
            )}

          </tbody>
        </Table>
      </CardBody>
    </Card>
  )
}

export default withState(injectState(DocumentTypes))
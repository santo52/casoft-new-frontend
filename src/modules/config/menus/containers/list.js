import React, { useState, useEffect } from 'react';
import {injectState} from 'freactal'
import withState from '../freactals/menus'


import { Link } from "react-router-dom";

import {
  Table,
  Card,
  Button,
  CardBody,
  CardHeader,
  Input
} from 'reactstrap';


const MenuList = ({ state, effects }) => {

  const { menus } = state

  useEffect(() => {
    effects.loadAll()
  }, [])

  return (
    <Card>
      <CardHeader className="flex">
        Menus
        <div className="card-header-right">
          <Link to={`/config/menus/nuevo`}>
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
            {menus.map(menu =>
              <tr key={menu._id} >
                <td>{menu._id}</td>
                <td>{menu.name}</td>
                <td>
                  <Link to={`/config/menus/${menu._id}`}>
                    <Button color="primary" size="sm">Editar</Button>
                  </Link>
                  <Button onClick={() => effects.deleteSingle(menu._id)} color="danger" size="sm">Eliminar</Button>
                </td>
              </tr>
            )}

          </tbody>
        </Table>
      </CardBody>
    </Card>
  )
}

export default withState(injectState(MenuList))
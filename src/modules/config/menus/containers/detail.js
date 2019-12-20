import React, { useState, useEffect } from 'react';
import { injectState } from 'freactal'
import withState from '../freactals/menus'
import { formDataToJSON } from '../../../../utils/functions'
import { useParams, useHistory } from "react-router-dom";

import {
  Form,
  FormGroup,
  Row,
  CardHeader,
  CardBody,
  Card,
  Col,
  Label,
  Input,
  ModalFooter,
  Button,
  Table,
  FormFeedback
} from 'reactstrap';


const MenuDetail = ({ state, effects }) => {

  const { menu } = state
  const { id } = useParams()
  const history = useHistory()

  useEffect(() => {
    effects.loadSingle(id)
  }, [])

  const handleSubmit = async (e) => {

    e.preventDefault()
    const data = formDataToJSON(e)
    const params = new URLSearchParams();
    params.append('data', JSON.stringify(data));
    await effects.upsert(id, params)

    history.push("/config/menus");
  }

  return (
    <Card>
      <CardHeader className="flex">
        Menus
        <div className="card-header-right"></div>
      </CardHeader>
      <CardBody>
        <Form  onSubmit={handleSubmit} >
          <Row>
            <Col sm='12' >

              <FormGroup row>
                <Label sm={3}>ID</Label>
                <Col sm={9}>
                  <Input defaultValue={menu._id} disabled />
                </Col>
                <FormFeedback >El campo es requerido</FormFeedback>
              </FormGroup>

              <FormGroup row>
                <Label sm={3}>Nombre</Label>
                <Col sm={9}>
                  <Input name="name" defaultValue={menu.name} />
                </Col>
                <FormFeedback >El campo es requerido</FormFeedback>
              </FormGroup>

              <FormGroup row>
                <Label sm={3}>Icono</Label>
                <Col sm={9}>
                  <Input  name="icon" defaultValue={menu.icon} />
                </Col>
                <FormFeedback >El campo es requerido</FormFeedback>
              </FormGroup>

              <FormGroup row>
                <Label sm={3}>Ruta</Label>
                <Col sm={9}>
                  <Input name="route" defaultValue={menu.route} />
                </Col>
                <FormFeedback >El campo es requerido</FormFeedback>
              </FormGroup>


              <FormGroup>
                <Button color='success' block>Guardar</Button>
              </FormGroup>

            </Col>
          </Row>
        </Form>
      </CardBody>
    </Card>
  )
}

export default withState(injectState(MenuDetail))
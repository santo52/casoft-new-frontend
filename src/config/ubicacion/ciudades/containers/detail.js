import React, { useState, useEffect } from 'react';
import { injectState } from 'freactal'
import withState from '../freactals/ciudades'


import { useParams } from "react-router-dom";

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


const CityDetail = ({ state, effects }) => {

  const { city } = state
  const { id } = useParams()

  useEffect(() => {
    effects.loadSingle(id)
  }, [])

  return (
    <Card>
      <CardHeader className="flex">
        Ciudades
        <div className="card-header-right"></div>
      </CardHeader>
      <CardBody>
        <Form  >
          <Row>
            <Col sm='12' >

              <FormGroup row>
                <Label sm={3}>ID</Label>
                <Col sm={9}>
                  <Input defaultValue={city._id} disabled />
                </Col>
                <FormFeedback >El campo es requerido</FormFeedback>
              </FormGroup>

              <FormGroup row>
                <Label sm={3}>Nombre ciudad</Label>
                <Col sm={9}>
                  <Input defaultValue={city.name} />
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

export default withState(injectState(CityDetail))
import React, { useState, useEffect } from 'react';
import { injectState } from 'freactal'
import withState from '../freactals/bancos'


import { Link } from "react-router-dom";

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


const BancosDetalle = ({ state, effects }) => {

  const { bank } = state

  const [activedTab, setActivedTab] = useState('1')
  const toggle = (tab) => {
    if (activedTab !== tab) {
      setActivedTab(tab)
    }
  }

  useEffect(() => {
    effects.loadBanks()
  }, [])

  return (
    <Card>
      <CardHeader className="flex">
        Bancos
        <div className="card-header-right"></div>
      </CardHeader>
      <CardBody>
    <Form  >
      <Row>
        <Col sm='12' >

        <FormGroup row>
            <Label sm={3}>ID</Label>
            <Col sm={9}>
              <Input defaultValue={bank._id} disabled />
            </Col>
            <FormFeedback >El campo es requerido</FormFeedback>
          </FormGroup>

          <FormGroup row>
            <Label sm={3}>Nombre del banco</Label>
            <Col sm={9}>
            <Input defaultValue={bank.name} />
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

export default withState(injectState(BancosDetalle))
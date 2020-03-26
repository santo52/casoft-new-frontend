import React, { useState, useEffect } from 'react';
import { injectState } from 'freactal'
import withState from '../freactals/variables'
import { formDataToJSON, accentsTidy } from '../../../../utils/functions'
import { useParams, useHistory } from "react-router-dom";
import styled from 'styled-components'


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
  FormFeedback,
  CustomInput,
  InputGroup,
  InputGroupAddon,
  InputGroupText
} from 'reactstrap';

const InputSwitch = styled(CustomInput)`

  .custom-control-label::before {
    transform: scale(1.5);
  }

  .custom-control-label::after {
    transform: scale(1.2);
  }

  .custom-control-input:checked~.custom-control-label::after {
      transform: translateX(.75rem) scale(1.2);
  }

  .custom-control-label {
    margin-left: 7px;
  }
`


const VariableDetail = ({ state, effects }) => {

  const { variable } = state
  const { id } = useParams()
  const history = useHistory()

  useEffect(() => {
    effects.loadSingle(id)
  }, [])

  const handleSubmit = async (e) => {

    e.preventDefault()
    const data = formDataToJSON(e)
    const alias = data.alias || accentsTidy(data.name).replace(/\s+/g, '')
    const info = { ...data, alias }
    const params = new URLSearchParams();
    params.append('data', JSON.stringify(info));
    await effects.upsert(id, params)

    history.push("/config/variables");
  }

  return (
    <Card>
      <CardHeader className="flex">
        Variables globales
        <div className="card-header-right"></div>
      </CardHeader>
      <CardBody>
        <Form onSubmit={handleSubmit} >
          <Row>
            <Col sm='12' >

              <FormGroup row>
                <Label sm={3}>ID</Label>
                <Col sm={9}>
                  <Input defaultValue={variable._id} disabled />
                  <Input type="hidden" name="alias" defaultValue={variable.alias} />
                </Col>
                <FormFeedback >El campo es requerido</FormFeedback>
              </FormGroup>

              <FormGroup row>
                <Label sm={3}>Nombre</Label>
                <Col sm={9}>
                  <Input name="name" defaultValue={variable.name} disabled={variable.fixed} />
                </Col>
                <FormFeedback >El campo es requerido</FormFeedback>
              </FormGroup>


              <FormGroup row>
                <Label sm={3}>Valor</Label>
                <Col sm={9}>
                  <Input name="value" defaultValue={variable.value} />
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

export default withState(injectState(VariableDetail))
import React, { useState, useEffect } from 'react';
import { injectState } from 'freactal'
import withState from '../freactals/parafiscales'
import { formDataToJSON } from '../../../../utils/functions'
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


const ParafiscalDetail = ({ state, effects }) => {

  const [isDiscount, setIsDiscount] = useState(false)
  const [withSalaryRange, setWithSalaryRange] = useState(false)
  const [chronology, setChronology] = useState('')
  const [from, setFrom] = useState('')

  const { parafiscal } = state
  const { id } = useParams()
  const history = useHistory()

  useEffect(() => {
    effects.loadSingle(id)
  }, [])

  const handleSubmit = async (e) => {

    e.preventDefault()
    const data = formDataToJSON(e)
    data.salaryRange = {
      from: data.fromSalary,
      to: data.toSalary,
    }

    console.log(data)
    const params = new URLSearchParams();
    params.append('data', JSON.stringify(data));
    await effects.upsert(id, params)

    history.push("/config/parafiscales");
  }

  useEffect(() => {
    setIsDiscount(parafiscal.isDiscount)
  }, [parafiscal.isDiscount])

  useEffect(() => {
    setChronology(parafiscal.chronology)
  }, [parafiscal.chronology])

  useEffect(() => {
    setFrom(parafiscal.from)
  }, [parafiscal.from])

  useEffect(() => {
    setWithSalaryRange(parafiscal.withSalaryRange)
  }, [parafiscal.withSalaryRange])

  return (
    <Card>
      <CardHeader className="flex">
        parafiscals
        <div className="card-header-right"></div>
      </CardHeader>
      <CardBody>
        <Form onSubmit={handleSubmit} >
          <Row>
            <Col sm='12' >

              <FormGroup row>
                <Label sm={3}>ID</Label>
                <Col sm={9}>
                  <Input defaultValue={parafiscal._id} disabled />
                </Col>
                <FormFeedback >El campo es requerido</FormFeedback>
              </FormGroup>

              <FormGroup row>
                <Label sm={3}>Nombre</Label>
                <Col sm={9}>
                  <Input name="name" defaultValue={parafiscal.name} />
                </Col>
                <FormFeedback >El campo es requerido</FormFeedback>
              </FormGroup>

              <FormGroup row>
                <Label sm={3}>Tiempo</Label>
                <Col sm={9}>
                  <Input type="select" name="chronology" value={chronology} onChange={(e) => setChronology(e.target.value)} >
                    <option value=""></option>
                    <option value="diary">Diario</option>
                    <option value="weekly">Semanal</option>
                    <option value="monthly">Mensual</option>
                    <option value="quarterly">Trimestral</option>
                    <option value="biannual">Semestral</option>
                    <option value="annual">Anual</option>
                  </Input>
                </Col>
                <FormFeedback >El campo es requerido</FormFeedback>
              </FormGroup>

              {isDiscount ? (
                <React.Fragment>
                  <FormGroup row>
                    <Label sm={3}>Porcentaje compañia</Label>
                    <Col sm={9}>
                      <Input name="companyPercentage" defaultValue={parafiscal.companyPercentage} />
                    </Col>
                    <FormFeedback >El campo es requerido</FormFeedback>
                  </FormGroup>

                  <FormGroup row>
                    <Label sm={3}>Porcentaje empleado</Label>
                    <Col sm={9}>
                      <Input name="employeePercentage" defaultValue={parafiscal.employeePercentage} />
                    </Col>
                    <FormFeedback >El campo es requerido</FormFeedback>
                  </FormGroup>
                </React.Fragment>
              ) : (
                  <FormGroup row>
                    <Label sm={3}>Porcentaje</Label>
                    <Col sm={9}>
                      <Input name="companyPercentage" defaultValue={parafiscal.companyPercentage} />
                      <Input type="hidden" name="employeePercentage" value={0} />
                    </Col>
                    <FormFeedback >El campo es requerido</FormFeedback>
                  </FormGroup>
                )}

              <FormGroup row>
                <Label sm={3}>Porcentaje calculado a partir de</Label>
                <Col sm={9}>
                  <Input type="select" name="from" value={from} onChange={(e) => setFrom(e.target.value)} >
                    <option value=""></option>
                    <option value="minime">Salario mínimo</option>
                    <option value="salary">Salario</option>
                    <option value="base">Ingreso base cotización</option>
                  </Input>
                </Col>
                <FormFeedback >El campo es requerido</FormFeedback>
              </FormGroup>

              <FormGroup row >
                <Label sm={3} check>¿Descuento?</Label>
                <Col sm={9}>
                  <InputSwitch id="isDiscount" type="switch" checked={isDiscount || false} onChange={e => setIsDiscount(e.target.checked)} />
                  <Input type="hidden" name="isDiscount" value={isDiscount || false} />
                </Col>
                <FormFeedback >El campo es requerido</FormFeedback>
              </FormGroup>

              <FormGroup row >
                <Label sm={3} check>¿Establecer rango de salarios?</Label>
                <Col sm={9}>
                  <InputSwitch type="switch" id="withSalaryRange" checked={withSalaryRange || false}  onChange={e => setWithSalaryRange(e.target.checked)} />
                  <Input type="hidden" name="withSalaryRange" value={withSalaryRange || false} />
                </Col>
                <FormFeedback >El campo es requerido</FormFeedback>
              </FormGroup>

              {withSalaryRange && (
                <FormGroup row>
                  <Label sm={3}>Rango de salarios</Label>
                  <Col sm={2}>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>Desde</InputGroupText>
                      </InputGroupAddon>
                      <Input type="number" name="fromSalary" defaultValue={parafiscal.salaryRange.from} />
                      <InputGroupAddon addonType="append">
                        <InputGroupText>SMLV</InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>
                  </Col>
                  <Col sm={2}>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>Hasta</InputGroupText>
                      </InputGroupAddon>
                      <Input type="number" name="toSalary" defaultValue={parafiscal.salaryRange.to} />
                      <InputGroupAddon addonType="append">
                        <InputGroupText>SMLV</InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>
                  </Col>
                  <FormFeedback >El campo es requerido</FormFeedback>
                </FormGroup>
              )}



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

export default withState(injectState(ParafiscalDetail))
import React, { useState, useEffect } from 'react';
import { injectState } from 'freactal'
import withState from '../freactals/parafiscales'
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
  FormFeedback,
  CustomInput
} from 'reactstrap';


const ParafiscalDetail = ({ state, effects }) => {

  const [isDiscount, setIsDiscount] = useState(false)
  const { parafiscal } = state
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

    history.push("/config/parafiscales");
  }

  useEffect(() => {
    setIsDiscount(parafiscal.isDiscount)
  }, [parafiscal.isDiscount])

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

              <FormGroup row >
                <Label sm={3} check>¿Descuento de nomina?</Label>
                <Col sm={9} style={{alignItems: 'center', display: 'flex'}}>
                  <Input className="m-0"  style={{transform: 'scale(1.7)'}} type="checkbox" checked={isDiscount} onChange={(e) => setIsDiscount(e.target.checked)} />     
                  <Input type="hidden" name="isDiscount" value={isDiscount} />     
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

export default withState(injectState(ParafiscalDetail))
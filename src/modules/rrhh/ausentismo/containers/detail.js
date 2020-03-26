import React, { useState, useEffect } from 'react';
import { injectState } from 'freactal'

import moment from 'moment'
import momentLocalizer from 'react-widgets-moment';
import { DropdownList, DateTimePicker } from 'react-widgets'


import withState from '../freactals/ausentismo'
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





//const formater = moment().format('DD/MM/YYYY h:mm:ss');
momentLocalizer()


const AusentismoDetail = ({ state, effects }) => {

  const { ausentismo, users, tiposAusentismo } = state
  const [ userId, setUserId ] = useState('')
  const [ absenceTypeId, setAbsenceTypeId ] = useState('')
  const [ dateStart, setDateStart ] = useState(null)

  const { id } = useParams()
  const history = useHistory();

  useEffect(() => {
    effects.loadSingle(id)
  }, [])

  useEffect(() => {
    ausentismo.userId && setUserId(ausentismo.userId)
    ausentismo.absenceTypeId && setAbsenceTypeId(ausentismo.userId)
    ausentismo.start && setDateStart(new Date(ausentismo.start))
  }, [ausentismo.userId])

  const handleSubmit = async (e) => {

    e.preventDefault()
    const data = formDataToJSON(e)
    const params = new URLSearchParams();
    params.append('data', JSON.stringify(data));
    await effects.upsert(id, params)

    history.push("/rrhh/ausentismo");
  }

  return (
    <Card>
      <CardHeader className="flex align-items-center">
        Bancos
        <div className="card-header-right"></div>
      </CardHeader>
      <CardBody>
        <Form onSubmit={handleSubmit} >
          <Row>
            <Col sm='12' >

              <FormGroup row>
                <Label sm={3}>ID</Label>
                <Col sm={9}>
                  <Input defaultValue={ausentismo._id} disabled />
                </Col>
                <FormFeedback >El campo es requerido</FormFeedback>
              </FormGroup>

              <FormGroup row>
                <Label sm={3}>Usuario</Label>
                <Col sm={9}>
                  <DropdownList 
                    filter
                    data={users}
                    value={users.find(user => user._id === userId)}
                    onChange={user => setUserId(user._id)}
                    textField={user => user && user.firstname + ' ' + user.lastname}
                  />
                  <Input name="userId" type="hidden" value={userId} />
                </Col>
                <FormFeedback >El campo es requerido</FormFeedback>
              </FormGroup>

              <FormGroup row>
                <Label sm={3}>Tipo de permiso</Label>
                <Col sm={9}>
                  <DropdownList 
                    filter
                    data={tiposAusentismo}
                    value={tiposAusentismo.find(item => item._id === absenceTypeId)}
                    onChange={item => setAbsenceTypeId(item._id)}
                    textField="name"
                  />
                  <Input name="absenceTypeId" type="hidden" value={absenceTypeId} />
                </Col>
                <FormFeedback >El campo es requerido</FormFeedback>
              </FormGroup>

              <FormGroup row>
                <Label sm={3}>Fecha y hora de inicio</Label>
                <Col sm={9}>
                  <DateTimePicker
                    format={moment(dateStart).format('DD/MM/YYYY h:mm:ss')}
                    name="start"
                    value={dateStart}
                    onChange={value => setDateStart(value)}
                    culture="es"
                  />
                </Col>
                <FormFeedback >El campo es requerido</FormFeedback>
              </FormGroup>

              <FormGroup row>
                <Label sm={3}>Tiempo en horas</Label>
                <Col sm={9}>
                  <Input name="time" type="number" defaultValue={ausentismo.time} />
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

export default withState(injectState(AusentismoDetail))
import React, { useState, useEffect } from 'react';
import { injectState } from 'freactal'

import moment from 'moment'
import momentLocalizer from 'react-widgets-moment';
import { DropdownList, DateTimePicker } from 'react-widgets'


import withState from '../freactals/horas_extra'
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


const ExtraHourDetail = ({ state, effects }) => {

  const { extraHour, users } = state
  const [ userId, setUserId ] = useState('')
  const [ dateStart, setDateStart ] = useState(null)
  const [ dateEnd, setDateEnd ] = useState(null)


  console.log(extraHour)

  const { id } = useParams()
  const history = useHistory();

  useEffect(() => {
    effects.loadSingle(id)
  }, [])

  useEffect(() => {
    extraHour.userId && setUserId(extraHour.userId)
    extraHour.start && setDateStart(new Date(extraHour.start))
    extraHour.finish && setDateEnd(new Date(extraHour.finish))
  }, [extraHour.userId])

  const handleSubmit = async (e) => {

    e.preventDefault()
    const data = formDataToJSON(e)
    const params = new URLSearchParams();
    params.append('data', JSON.stringify(data));
    await effects.upsert(id, params)

    history.push("/rrhh/horas-extra");
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
                  <Input defaultValue={extraHour._id} disabled />
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
                <Label sm={3}>Fecha y hora fin</Label>
                <Col sm={9}>
                <DateTimePicker
                    format={moment(dateEnd).format('DD/MM/YYYY h:mm:ss')}
                    name="finish"
                    value={dateEnd}
                    onChange={value => setDateEnd(value)}
                    culture="es"
                  />
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

export default withState(injectState(ExtraHourDetail))
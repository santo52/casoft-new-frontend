import React, { useState, useEffect } from 'react';
import { injectState } from 'freactal'
import withState from '../freactals/ciudades'
import { formDataToJSON } from '../../../../../utils/functions'
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


const CityDetail = ({ state, effects }) => {

  const { city, departments } = state
  const [departmentId, setDepartmentId] = useState('')
  const { id } = useParams()
  const history = useHistory()

  useEffect(() => {
    effects.loadSingle(id)
  }, [])

  useEffect(() => {
    setDepartmentId(city.departamentId)
  }, [city.departamentId])

  const handleSubmit = async (e) => {

    e.preventDefault()
    const data = formDataToJSON(e)
    const params = new URLSearchParams();
    params.append('data', JSON.stringify(data));
    await effects.upsert(id, params)

    history.push("/config/ubicacion/ciudades");
  }


  return (
    <Card>
      <CardHeader className="flex">
        Ciudades
        <div className="card-header-right"></div>
      </CardHeader>
      <CardBody>
        <Form  onSubmit={handleSubmit} >
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
                <Label sm={3}>Departamento</Label>
                <Col sm={9}>
                  <Input type="select" name="departamentId" value={departmentId} onChange={(e) => setDepartmentId(e.target.value)} >
                    {departments.map(department => (
                      <option key={department._id} value={department._id}>{department.name}</option>
                    ))}
                  </Input>
                </Col>
                <FormFeedback >El campo es requerido</FormFeedback>
              </FormGroup>

              <FormGroup row>
                <Label sm={3}>Nombre ciudad</Label>
                <Col sm={9}>
                  <Input name="name" defaultValue={city.name} />
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
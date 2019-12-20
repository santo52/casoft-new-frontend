import React, { useState, useEffect } from 'react';
import { injectState } from 'freactal'
import withState from '../freactals/tiposContrato'
import { formDataToJSON } from '../../../../utils/functions'
import { useParams, useHistory } from "react-router-dom";
import { DropdownList } from 'react-widgets'

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


const ContractTypeDetail = ({ state, effects }) => {

  const { contractType, parafiscals } = state
  const [parafiscalList, setParafiscalList] = useState([])
  const { id } = useParams()
  const history = useHistory();

  useEffect(() => {
    effects.loadSingle(id)
  }, [])

  const updateParafiscalId = (index, parafiscalId) => {
    const newParafiscalList = parafiscalList
    newParafiscalList[index]._id = parafiscalId
    setParafiscalList(newParafiscalList)
  }

  const updateParafiscalDays = (index, days) => {
    const newParafiscalList = parafiscalList
    newParafiscalList[index].days = days
    setParafiscalList(newParafiscalList)
  }

  const updateParafiscalPercentage = (index, percentPaid) => {
    const newParafiscalList = parafiscalList
    newParafiscalList[index].percentPaid = percentPaid
    setParafiscalList(newParafiscalList)
  }

  const addEmptyParafiscal = () => {
    const newParafiscalList = [...parafiscalList, {}]
    setParafiscalList(newParafiscalList)
  }

  const removeParafiscal = (index) => {
    const newParafiscalList = parafiscalList
    newParafiscalList.splice(index, 1)
    setParafiscalList(newParafiscalList)
  }



  useEffect(() => {
    contractType.parafiscals && setParafiscalList(contractType.parafiscals)
  }, [contractType.parafiscals])

  const handleSubmit = async (e) => {

    e.preventDefault()
    const data = formDataToJSON(e)
    data.parafiscals = parafiscalList
    const params = new URLSearchParams();
    params.append('data', JSON.stringify(data));
    await effects.upsert(id, params)
    history.push("/config/tipos-de-contrato");
  }


  return (
    <Card>
      <CardHeader className="flex">
        Tipos de contrato
        <div className="card-header-right"></div>
      </CardHeader>
      <CardBody>
        <Form onSubmit={handleSubmit} >
          <Row>
            <Col sm='12' >
              <FormGroup row>
                <Label sm={3}>ID</Label>
                <Col sm={9}>
                  <Input defaultValue={contractType._id} disabled />
                </Col>
                <FormFeedback >El campo es requerido</FormFeedback>
              </FormGroup>

              <FormGroup row>
                <Label sm={3}>Tipo de contrato</Label>
                <Col sm={9}>
                  <Input name="name" defaultValue={contractType.name} />
                </Col>
                <FormFeedback >El campo es requerido</FormFeedback>
              </FormGroup>

              <FormGroup row>
                <Label sm={3}>Parafiscales</Label>
                <Col sm={9}>
                  <Button onClick={() => addEmptyParafiscal()} type="button" color='success'>Agregar</Button>
                  {parafiscalList.map((item, index) => {
                    const totalData = parafiscals.find(paraf => paraf._id === item._id)
                    console.log(parafiscals, item)
                    return <React.Fragment key={String(index)} >
                      <hr />
                      <FormGroup row>
                        <Col sm={12}>
                          <div onClick={() => removeParafiscal(index)} style={{float: 'right', cursor: 'pointer'}}>x</div>
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label sm={3}>Nombre</Label>
                        <Col sm={9}>
                          <DropdownList
                            filter
                            data={parafiscals}
                            defaultValue={totalData}
                            onChange={parafiscal => updateParafiscalId(index, parafiscal._id)}
                            textField="name"
                          />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label sm={3}>Tope de días para pago</Label>
                        <Col sm={9}>
                          <Input type="number" onKeyUp={(e) => updateParafiscalDays(index, e.target.value)} defaultValue={item.days} />
                        </Col>
                      </FormGroup>

                      <FormGroup row>
                        <Label sm={3}>Porcentaje descontado o pagado</Label>
                        <Col sm={9}>
                          <Input type="number" onKeyUp={(e) => updateParafiscalPercentage(index, e.target.value)} defaultValue={item.percentPaid} />
                        </Col>
                      </FormGroup>

                      
                    </React.Fragment>
                  })}
                  {/**/}
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

export default withState(injectState(ContractTypeDetail))
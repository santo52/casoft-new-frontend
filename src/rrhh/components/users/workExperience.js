import React, { Fragment, useState } from 'react'
import Avatar from '../../components/avatar'
import {
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
  FormText,
  Row,
  Col,
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardColumns,
  Table,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap';



const WorkExperience = () => {

  const [popOpen, open] = useState(false)

  const popout = () => {
    open(true)
  }

  const toggle = () => {
    open(false)
  }


  return <div>

      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Empresa</th>
            <th>Fecha inicio / Fecha fin</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Bewe software</td>
            <td>2019/08/01 - Actual</td>
            <td>
              <Button color="primary" size="sm" onClick={popout} >Abrir</Button>
              <Button color="danger" size="sm">Eliminar</Button>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Casa Editorial ElTiempo</td>
            <td>2019/04/01 - 2019/07/29</td>
            <td>
              <Button color="primary" size="sm" onClick={popout} >Abrir</Button>
              <Button color="danger" size="sm">Eliminar</Button>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>SCI Software</td>
            <td>2019/08/29 - 2019/03/29</td>
            <td>
              <Button color="primary" size="sm" onClick={popout} >Abrir</Button>
              <Button color="danger" size="sm">Eliminar</Button>
            </td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Ingeal S.A</td>
            <td>2016/11/29 - 2019/07/20</td>
            <td>
              <Button color="primary" size="sm" onClick={popout} >Abrir</Button>
              <Button color="danger" size="sm">Eliminar</Button>
            </td>
          </tr>
        </tbody>
      </Table>

    <div>
      <Modal size='lg' isOpen={popOpen} fade={false} toggle={toggle} >
        <ModalBody>
          <div style={{ height: '65vh' }} >
            <embed width='100%' height="100%" type="application/pdf" src="https://www.uv.es/bellochc/pdf/Presentaciones%20multimedia.pdf"></embed>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Cerrar</Button>{' '}
        </ModalFooter>
      </Modal>
    </div>
  </div>
}

export default WorkExperience
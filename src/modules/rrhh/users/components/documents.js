
import React, { Fragment, useState } from 'react'
import Avatar from './avatar'
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
  CardSubtitle,
  Table,
  Modal,
  ModalBody,
  ModalFooter
} from 'reactstrap';

const Documents = ({user, getCV, openCV}) => {
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
              <th>Documento</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Pasado judicial</td>
              <td>
                <Button color="primary" size="sm" onClick={popout} >Abrir</Button>
                <Button color="danger" size="sm">Eliminar</Button>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Hoja de vida</td>
              <td>
                <Button color="primary" size="sm" onClick={() => getCV(user)} >Abrir</Button>
                <Button color="danger" size="sm">Eliminar</Button>
              </td>
            </tr>

          </tbody>
        </Table>

    <div>
      <Modal size='lg' isOpen={popOpen} fade={false} toggle={toggle} >
        <ModalBody>
          <div style={{ height: '65vh' }} >
            <embed width='100%' height="100%" type="application/pdf" src="https://s1.q4cdn.com/806093406/files/doc_downloads/test.pdf"></embed>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Cerrar</Button>{' '}
        </ModalFooter>
      </Modal>
    </div>
  </div>
}

export default Documents
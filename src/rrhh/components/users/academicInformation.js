import Avatar from '../avatar'
import React, { Fragment, useState } from 'react'
import {
  FormGroup,
  Input,
  Row,
  Col,
  Button,
  Table,
  Modal,
  ModalBody,
  ModalFooter
} from 'reactstrap';

const AcademicInformation = () => {

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
            <th>Título</th>
            <th>Estado</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Bachiller</td>
            <td>Finalizado</td>
            <td>
              <Button color="primary" size="sm" onClick={popout} >Abrir</Button>
              <Button color="danger" size="sm">Eliminar</Button>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Tecnólogo en informática</td>
            <td>Finalizado</td>
            <td>
              <Button color="primary" size="sm" onClick={popout} >Abrir</Button>
              <Button color="danger" size="sm">Eliminar</Button>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Ingeniero de sistemas</td>
            <td>En curso  </td>
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
            <embed width='100%' height="100%" type="application/pdf" src="https://www.posgrado.unam.mx/filosofiadelaciencia/media/uploaded_files/2012/04/guia_digit_conacyt.pdf"></embed>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Cerrar</Button>{' '}
        </ModalFooter>
      </Modal>
    </div>
  </div>
}

export default AcademicInformation
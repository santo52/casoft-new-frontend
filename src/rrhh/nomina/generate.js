import React, { useState, useEffect } from 'react';
//import { findAll, deleteOne, uploadMasive } from '../../src/reducers/users/users.actions'
import {
  calculateEmployeeIncome,
  calculateEmployeeSpend,
  calculateEmployeeTotal,
  formatNumberToMoney
} from '../../utils/functions'

import { injectState } from 'freactal'
import withState from '../freactals/rrhh'


import {
  Table,
  Card,
  Button,
  CardBody,
  CardHeader,
  Modal,
  ModalBody,
  ModalFooter
} from 'reactstrap';


const Generate = ({state, effects}) => {

  const { users, deleteOne, uploadMasive } = state

  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [user, setUser] = useState({ salary: {} })

  const show = (user) => {
    setModalIsOpen(true)
    const salary = user.salary || {}
    setUser({ ...user, salary })
  }

  const close = () => {
    setModalIsOpen(false)
  }

  useEffect(() => {
    effects.getUsers()
  }, [])

  return (
    <Card>
      <CardHeader className="flex">
        Nomina
      </CardHeader>
      <CardBody>
        <Table responsive>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Identificación</th>
              <th>Ingreso</th>
              <th>Deducción</th>
              <th>Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map(user =>
              <tr key={user._id} >
                <td>{user.firstname} {user.lastname}</td>
                <td>{user.document}</td>
                <td>{calculateEmployeeIncome(user)}</td>
                <td>{calculateEmployeeSpend(user)}</td>
                <td>{calculateEmployeeTotal(user)}</td>
                <td>
                  <Button onClick={() => show(user)} color="info" size="sm">Ver</Button>
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </CardBody>
      <div>
        <Modal size='lg' isOpen={modalIsOpen} fade={false} toggle={close} >
          <ModalBody>
            <table style={{ width: '100%' }}>
              <tr>
                <td>Año / Mes / Día</td>
              </tr>
              <tr>
                <td>2019 / 11 / 18</td>
              </tr>
              <tr>
                <td>Nombre: {user.firstname} {user.lastname}</td>
                <td>Documento: {user.document}</td>
              </tr>
              <tr>
                <td></td>
              </tr>
              <tr style={{ background: '#989898', color: 'white', fontWeight: 'bold' }}>
                <td colspan="6" style={{ padding: '0 10px' }}>Concepto</td>
                <td colspan="6" >Valor</td>
              </tr>
              <tr style={{ textAlign: 'center', background: 'rgb(191, 191, 191)', color: 'white', fontWeight: 'bold' }}>
                <td colspan="12" style={{ textAlign: 'center' }}>Ingresos</td>
              </tr>
              <tr >
                <td colspan="6">Salario básico</td>
                <td colspan="6">{formatNumberToMoney(1200000)}</td>
              </tr>
              <tr >
                <td colspan="6">Subsidio de transporte</td>
                <td colspan="6">{formatNumberToMoney(0)}</td>
              </tr>
              <tr>
                <td colspan="2">Horas extras</td>
                <td>HED</td>
                <td>HEN</td>
                <td>HEDF</td>
                <td>HENF</td>
                <td colspan="6" rowspan="2" >$ 0.00</td>
              </tr>
              <tr>
                <td colspan="2">Total horas</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
              </tr>
              <tr>
                <td colspan="2">Recargos</td>
                <td>RN</td>
                <td>RNF</td>
                <td colspan="2">RNDF</td>
                <td colspan="6" rowspan="2" >$ 0.00</td>
              </tr>
              <tr>
                <td colspan="2">Total horas</td>
                <td>0</td>
                <td>0</td>
                <td colspan="2">0</td>
              </tr>
              <tr >
                <td colspan="6">Prima de servicios</td>
                <td colspan="6">$ 0.00</td>
              </tr>
              <tr >
                <td colspan="6">Intereses de cesantias</td>
                <td colspan="6">$ 0.00</td>
              </tr>
              <tr >
                <td colspan="6">Total ingresos</td>
                <td colspan="6">{calculateEmployeeIncome(user)}</td>
              </tr>

              <tr style={{ textAlign: 'center', background: 'rgb(191, 191, 191)', color: 'white', fontWeight: 'bold' }}>
                <td colspan="12" style={{ textAlign: 'center' }}>Deducciones</td>
              </tr>
              {/*<tr >
                <td colspan="6">Salud</td>
                <td colspan="6">{formatNumberToMoney(user.salary.basic * 0.04)}</td>
              </tr>
              <tr >
                <td colspan="6">Pensión</td>
                <td colspan="6">{formatNumberToMoney(user.salary.basic * 0.04)}</td>
              </tr>
              <tr >
                <td colspan="6">Fondo de solidaridad</td>
                <td colspan="6">{formatNumberToMoney(user.salary.basic > (828116 * 4) ? user.salary.basic * 0.01 : 0)}</td>
              </tr>*/}
              <tr >
                <td colspan="6">Retención en la fuente</td>
                <td colspan="6">$ 0.00</td>
              </tr>
              <tr >
                <td colspan="6">Incapacidades</td>
                <td colspan="6">$ 0.00</td>
              </tr>
              <tr >
                <td colspan="6">Total deducciones</td>
                <td colspan="6">{calculateEmployeeSpend(user)}</td>
              </tr>
              <tr style={{ textAlign: 'center', background: 'rgb(191, 191, 191)', color: 'white', fontWeight: 'bold' }}>
                <td colspan="6" style={{ textAlign: 'center' }}>Total</td>
                <td colspan="6" style={{ textAlign: 'left' }}>{calculateEmployeeTotal(user)}</td>
              </tr>
            </table>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={close}>Cerrar</Button>{' '}
          </ModalFooter>
        </Modal>
      </div>
    </Card>
  )
}
/*
Generate.getInitialProps = async ({ store, query }) => {
    await store.dispatch(findAll())
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {
        findAll,

    }
}


function mapStateToProps(state) {
    return {
        users: state.users
    }
}*/

export default withState(injectState(Generate))

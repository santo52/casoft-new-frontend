
import React, { useState, useEffect } from 'react';
import Tabs from '../components/tabs'
import Avatar from '../components/avatar'
import { formDataToJSON } from '../../../utils/functions'
import { useParams, useHistory } from "react-router-dom";

import { injectState } from 'freactal'
import withState from '../freactals/usuarios'

//import { findOne, getCV } from '../../src/reducers/users/users.actions'
//import { findAll } from '../../src/reducers/documentTypes/documentTypes.actions'
//import { getCenters } from '../../src/reducers/centers/centers.actions'
//import { getContractTypes } from '../../src/reducers/contracts/contracts.actions'
import {
  Form,
  FormGroup,
  Row,
  Col,
  Modal,
  ModalBody,
  ModalFooter,
  Button
} from 'reactstrap';

import {
  BasicInformation,
  PersonalInformation,
  AcademicInformation,
  WorkExperience,
  Documents
} from '../components'


const DetailtUser = (props) => {

  const { id } = useParams()
  const history = useHistory();

  const { state, effects } = props
  const { user, documentTypes } = state
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [pdf, setPDF] = useState('')

  useEffect(() => {
    if (user.file) {
      setModalIsOpen(true)
    }

    setPDF(user.file)
  }, [user])

  useEffect(() => {
    effects.loadUser(id)
  }, [])

  const toggle = () => {
    setModalIsOpen(false)
  }

  const handleSubmit = async (e) => {

    e.preventDefault()
    const data = formDataToJSON(e)
    const params = new URLSearchParams();
    params.append('data', JSON.stringify(data));
    await effects.upsert(id, params)

    history.push("/rrhh/usuarios");
  }

  return (
    <React.Fragment>
      <Form onSubmit={handleSubmit} >
        <Row>
          <Col sm='12' md='4' lg='3'>
            <FormGroup>
              <Avatar upload={true} {...props} />
            </FormGroup>
          </Col>
          <Col sm='12' md='8' lg='9'>
            <Tabs >
              <BasicInformation {...state} user={user} title='Información Básica' />
              <PersonalInformation {...state} user={user} title='Información Personal' />
              <AcademicInformation {...state} user={user} title='Formación Académica' />
              <WorkExperience {...state} user={user} title='Experiencia Laboral' />
              <Documents {...state} user={user} title='Documentos' />
            </Tabs>
            <Button color='success' block>Guardar</Button>
          </Col>
        </Row>
        
      </Form>
      <div>
        <Modal size='lg' isOpen={modalIsOpen} fade={false} toggle={toggle} >
          <ModalBody>
            <div style={{ height: '65vh' }} >
              <embed width='100%' height="100%" type="application/pdf" src={pdf} ></embed>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle}>Cerrar</Button>{' '}
          </ModalFooter>
        </Modal>
      </div>
    </React.Fragment>
  )
}
/*
Edit.getInitialProps = async ({ store, query }) => {
    await store.dispatch(findOne(query))
    await store.dispatch(findAll())
    await store.dispatch(getCenters())
    await store.dispatch(getContractTypes())
    return {}
}


const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        findOne,
        getCV: (data) => {
            dispatch(getCV(data))
        }
    }
}

function mapStateToProps(state) {
    return {
        user: state.users.selected,
        docTypes: state.docTypes.data,
        centers: state.centers.data,
        contracts: state.contracts.data,
    }
}*/

export default withState(injectState(DetailtUser))//connect(mapStateToProps, mapDispatchToProps)(Edit)

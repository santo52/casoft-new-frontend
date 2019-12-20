

import React, { Fragment, useState, useEffect } from 'react'
import { DropdownList } from 'react-widgets'

import {
  FormGroup,
  Label,
  Input,
  FormFeedback,
  Button
} from 'reactstrap';

const BasicInformation = (props) => {

  const { user, documentTypes, centers, contracts } = props
  const { salary } = user

  const [documentType, setDocumentType] = useState('')
  const [centerId, setCenterId] = useState('')
  const [contractId, setContractId] = useState('')
  

  useEffect(() => {
    user.documentTypeId && setDocumentType(user.documentTypeId)
  }, [user.documentTypeId])

  useEffect(() => {
    user.centerId && setCenterId(user.centerId)
  }, [user.centerId])

  useEffect(() => {
    user.contractId && setContractId(user.contractId)
  }, [user.contractId])

  return <Fragment>
    <FormGroup>
      <Label>Nombres</Label>
      <Input name="firstname" defaultValue={user.firstname} />
      <FormFeedback >El campo es requerido</FormFeedback>
    </FormGroup>

    <FormGroup>
      <Label>Apellido</Label>
      <Input name="lastname" defaultValue={user.lastname} />
      <FormFeedback >El campo es requerido</FormFeedback>
    </FormGroup>

    <FormGroup>
      <Label>Email</Label>
      <Input name="email" defaultValue={user.email} />
      <FormFeedback >El campo es requerido</FormFeedback>
    </FormGroup>

    <FormGroup>
      <Label>Teléfono</Label>
      <Input name="telephone" defaultValue={user.telephone} />
      <FormFeedback >El campo es requerido</FormFeedback>
    </FormGroup>


    <FormGroup>
      <Label>Tipo de identificación</Label>
      <DropdownList
        filter
        data={documentTypes}
        value={documentTypes.find(doctype => doctype._id === documentType)}
        onChange={documentType => setDocumentType(documentType._id)}
        textField="name"
      />
      <Input name="documentTypeId" type="hidden" value={documentType} />
      <FormFeedback >El campo es requerido</FormFeedback>
    </FormGroup>

    <FormGroup>
      <Label>Número de identificación</Label>
      <Input name="document" defaultValue={user.document} />
      <FormFeedback >El campo es requerido</FormFeedback>
    </FormGroup>

    <FormGroup>
      <Label>Fecha de expedición documento</Label>
      <Input name="documentExpeditionDate" type="date" defaultValue={user.documentExpeditionDate} />
      <FormFeedback >El campo es requerido</FormFeedback>
    </FormGroup>



    <br />
    <hr />
    <br />

    <FormGroup>
      <Label>EPS</Label>
      <Input name="eps" defaultValue={user.eps} />
      <FormFeedback >El campo es requerido</FormFeedback>
    </FormGroup>

    <FormGroup>
      <Label>Fondo de pensiones</Label>
      <Input name="afp" defaultValue={user.afp} />
      <FormFeedback >El campo es requerido</FormFeedback>
    </FormGroup>

    <FormGroup>
      <Label>Fondo de cesantias</Label>
      <Input name="afs" defaultValue={user.afs} />
      <FormFeedback >El campo es requerido</FormFeedback>
    </FormGroup>

    <FormGroup>
      <Label>Caja de compensación</Label>
      <Input name="box" defaultValue={user.box} />
      <FormFeedback >El campo es requerido</FormFeedback>
    </FormGroup>


    <br />
    <hr />
    <br />

    <FormGroup>
      <Label>Cargo</Label>
      <Input name="jobTitle" defaultValue={user.jobTitle} />
      <FormFeedback >El campo es requerido</FormFeedback>
    </FormGroup>

    <FormGroup>
      <Label>Centro de costos</Label>
      <DropdownList
        filter
        data={centers}
        value={centers.find(center => center._id === centerId)}
        onChange={center => setCenterId(center._id)}
        textField="name"
      />
      <Input name="centerId" type="hidden" value={centerId} />
    </FormGroup>
    <FormFeedback >El campo es requerido</FormFeedback>

    <FormGroup>
      <Label>Tipo de contrato</Label>
      <DropdownList
        filter
        data={contracts}
        value={contracts.find(contract => contract._id === contractId)}
        onChange={contract => setContractId(contract._id)}
        textField="name"
      />
      <Input name="contractId" type="hidden" value={contractId} />
      <FormFeedback >El campo es requerido</FormFeedback>
    </FormGroup>


    <FormGroup>
      <Label>Salario básico</Label>
      <Input name="salary" defaultValue={user.salary} />
      <FormFeedback >El campo es requerido</FormFeedback>
    </FormGroup>

    <FormGroup>
      <Label>Subsidio de transporte</Label>
      <Input name="salary" defaultValue={user.salary} />
      <FormFeedback >El campo es requerido</FormFeedback>
    </FormGroup>
  </Fragment>
}

export default BasicInformation
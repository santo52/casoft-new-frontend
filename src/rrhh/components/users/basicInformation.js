

import React, { Fragment } from 'react'

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
      <Input name="documentTypeId" type="select" defaultValue={user.documentTypeId} >
        <option value="" >Seleccionar ...</option>
        {documentTypes.map(docType =>
          <option key={docType._id} value={docType._id} >{docType.name}</option>
        )}
      </Input>
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
      <Input name="centerId" type="select" defaultValue={user.centerId} >
        <option key={'empty'} value="" >Seleccionar ...</option>
        {centers.map(center =>
          <option key={center._id} value={center._id} >{center.name}</option>
        )}
      </Input>
    </FormGroup>
      <FormFeedback >El campo es requerido</FormFeedback>

    <FormGroup>
      <Label>Tipo de contrato</Label>
      <Input name="contractTypeID" type="select" defaultValue={user.contractTypeID} >
        <option value="" >Seleccionar ...</option>
        {contracts.map(contract =>
          <option key={contract._id} value={contract._id} >{contract.name}</option>
        )}
      </Input>
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
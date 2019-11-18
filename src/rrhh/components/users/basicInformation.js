

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
      <Input defaultValue={user.firstname} />
      <FormFeedback >El campo es requerido</FormFeedback>
    </FormGroup>

    <FormGroup>
      <Label>Apellido</Label>
      <Input defaultValue={user.lastname} />
      <FormFeedback >El campo es requerido</FormFeedback>
    </FormGroup>

    <FormGroup>
      <Label>Email</Label>
      <Input defaultValue={user.email} />
      <FormFeedback >El campo es requerido</FormFeedback>
    </FormGroup>

    <FormGroup>
      <Label>Teléfono</Label>
      <Input defaultValue={user.telephone} />
      <FormFeedback >El campo es requerido</FormFeedback>
    </FormGroup>

    <FormGroup>
      <Label>Tipo de identificación</Label>
      <Input type="select" defaultValue={user.documentTypeId} >
        <option value="" >Seleccionar ...</option>
        {documentTypes.map(docType =>
          <option key={docType._id} value={docType._id} >{docType.name}</option>
        )}
      </Input>
      <FormFeedback >El campo es requerido</FormFeedback>
    </FormGroup>

    <FormGroup>
      <Label>Número de identificación</Label>
      <Input defaultValue={user.document} />
      <FormFeedback >El campo es requerido</FormFeedback>
    </FormGroup>

    <FormGroup>
      <Label>Fecha de expedición documento</Label>
      <Input type="date" defaultValue={user.documentExpeditionDate} />
      <FormFeedback >El campo es requerido</FormFeedback>
    </FormGroup>



    <br />
    <hr />
    <br />

    <FormGroup>
      <Label>EPS</Label>
      <Input defaultValue={user.eps} />
      <FormFeedback >El campo es requerido</FormFeedback>
    </FormGroup>

    <FormGroup>
      <Label>Fondo de pensiones</Label>
      <Input defaultValue={user.afp} />
      <FormFeedback >El campo es requerido</FormFeedback>
    </FormGroup>

    <FormGroup>
      <Label>Fondo de cesantias</Label>
      <Input defaultValue={user.afs} />
      <FormFeedback >El campo es requerido</FormFeedback>
    </FormGroup>

    <FormGroup>
      <Label>Caja de compensación</Label>
      <Input defaultValue={user.box} />
      <FormFeedback >El campo es requerido</FormFeedback>
    </FormGroup>


    <br />
    <hr />
    <br />

    <FormGroup>
      <Label>Cargo</Label>
      <Input defaultValue={user.jobTitle} />
      <FormFeedback >El campo es requerido</FormFeedback>
    </FormGroup>

    <FormGroup>
      <Label>Centro de costos</Label>
      <Input type="select" defaultValue={user.centerId} >
        <option key={'empty'} value="" >Seleccionar ...</option>
        {centers.map(center =>
          <option key={center._id} value={center._id} >{center.name}</option>
        )}
      </Input>
    </FormGroup>
      <FormFeedback >El campo es requerido</FormFeedback>

    <FormGroup>
      <Label>Tipo de contrato</Label>
      <Input type="select" defaultValue={user.contractTypeID} >
        <option value="" >Seleccionar ...</option>
        {contracts.map(contract =>
          <option key={contract._id} value={contract._id} >{contract.name}</option>
        )}
      </Input>
      <FormFeedback >El campo es requerido</FormFeedback>
    </FormGroup>


    <FormGroup>
      <Label>Salario básico</Label>
      <Input defaultValue={user.salary} />
      <FormFeedback >El campo es requerido</FormFeedback>
    </FormGroup>

    <FormGroup>
      <Label>Subsidio de transporte</Label>
      <Input defaultValue={user.salary} />
      <FormFeedback >El campo es requerido</FormFeedback>
    </FormGroup>

    <FormGroup>
      <Button color='success' block>Guardar</Button>
    </FormGroup>
  </Fragment>
}

export default BasicInformation

import Avatar from '../../components/avatar'
import React, { Fragment, useState } from 'react'
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
  CardBody
} from 'reactstrap';



const PersonalInformation = ({user}) => (

  <Fragment>
    <FormGroup>
      <Label>Dirección de domicilio</Label>
      <Input defaultValue={user.address} />
      <FormFeedback >El campo es requerido</FormFeedback>
    </FormGroup>

    <FormGroup>
      <Label>Barrio</Label>
      <Input defaultValue={user.neighborhood} />
      <FormFeedback >El campo es requerido</FormFeedback>
    </FormGroup>

    <FormGroup>
      <Label>Estrato socioeconomico</Label>
      <Input defaultValue={user.stratum} />
      <FormFeedback >El campo es requerido</FormFeedback>
    </FormGroup>

    <FormGroup>
      <Label>Grupo sanguineo</Label>
      <Input defaultValue={user.bloodType} type="select">
        <option value="O-">O-</option>
        <option value="O+">O+</option>
        <option value="A-">A-</option>
        <option value="A+">A+</option>
        <option value="B-">B-</option>
        <option value="B+">B+</option>
        <option value="AB-">AB-</option>
        <option value="AB+">AB+</option>
      </Input>
      <FormFeedback >El campo es requerido</FormFeedback>
    </FormGroup>

    <FormGroup>
      <Label>Genero</Label>
      <Input defaultValue={user.gender} type="select" >
        <option value="M">Masculino</option>
        <option value="F">Femenino</option>
      </Input>
      <FormFeedback >El campo es requerido</FormFeedback>
    </FormGroup>

    <FormGroup>
      <Label>Estado civil</Label>
      <Input type="select" defaultValue={user.civilStatus}>
        <option value="1" >Soltero</option>
        <option value="2">Casado</option>
        <option value="3">Unión libre</option>
        <option value="4">Separado</option>
        <option value="5">Viudo</option>
      </Input>
      <FormFeedback >El campo es requerido</FormFeedback>
    </FormGroup>

    <FormGroup>
      <Label>Libreta militar</Label>
      <Input defaultValue={user.militaryCard} />
    </FormGroup>


    <FormGroup>
      <Button color='success' block>Guardar</Button>
    </FormGroup>
  </Fragment>
)

export default PersonalInformation
import React, { useEffect } from 'react'
import { injectState } from "freactal"
import withState from '../../freactals/huellero'


import {
  Label,
  Card,
  Button,
  CardBody,
  CardHeader,
  FormGroup,
  Col,
  Row, 
  Form,
  Input,
  FormFeedback
} from 'reactstrap';


const UploadIncomeDeparture = ({ state, effects }) => {

  const { lastUploadDate } = state

  
  const handleFiles = (e) => {
    e.preventDefault()
    e.stopPropagation()


    if(!e.target.file.files.length){
      return false
    }

    if (window.FileReader) {
      getAsText(e.target.file.files[0]);
    } else {
      alert('FileReader are not supported in this browser.');
    }

    return false
  }

  const getAsText = (fileToRead) => {
    var reader = new FileReader();    
    reader.readAsText(fileToRead);
    reader.onload = loadHandler;
    reader.onerror = errorHandler;
  }

  const loadHandler = (event) => {
    var csv = event.target.result;
    processData(csv);
  }

  const processData = (csv) => {
    var allTextLines = csv.split(/\r\n|\n/);
    var lines = [];

    for (var i = 0; i < allTextLines.length; i++) {
      var data = allTextLines[i].split(',');
      var tarr = [];
      if (!isNaN(parseInt(data[0]))) {
        for (var j = 0; j < data.length; j++) {
          tarr.push(data[j]);
        }
        lines.push(tarr);
      }
    }

    const documents = lines.map(line => ({
      identification: line[0],
      start: line[1],
      finish: line[1]
    }))

    effects.uploadMasive(documents)
  }

  function errorHandler(evt) {
    if (evt.target.error.name == "NotReadableError") {
      alert("Canno't read file !");
    }
  }

  return (

    <Card>
      <CardHeader className="flex">
        Subir registros huellero
        <div className="card-header-right"></div>
      </CardHeader>
      <CardBody>
        <Form  onSubmit={handleFiles} encType="multipart/form-data" >
          <Row>
            <Col sm='12' >

              <FormGroup row>
                <Label sm={3}>Última subida de datos</Label>
                <Col sm={9}>
                  <Input defaultValue={lastUploadDate} disabled />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label sm={3}>Subir CSV</Label>
                <Col sm={9}>
                  <Input name="file" type='file' accept=".csv" />
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


export default withState(injectState(UploadIncomeDeparture))
import React, { useState, useEffect } from 'react';
import { injectState } from "freactal";
import widthState from '../../freactals/rrhh'
import { Link } from "react-router-dom";
//import { findAll, deleteOne, uploadMasive } from '../../src/reducers/users/users.actions'
//import { Link } from '../../routes'
import {
  Table,
  Card,
  Button,
  CardBody,
  CardHeader,
  Input
} from 'reactstrap';


const UserList = ({ state, effects }) => {

  const { users } = state

  const [activedTab, setActivedTab] = useState('1')
  const toggle = (tab) => {
    if (activedTab !== tab) {
      setActivedTab(tab)
    }
  }

  useEffect(() => {
    effects.getUsers()
  }, [])

  /*const handleFiles = (e) => {
    if (window.FileReader) {
      getAsText(e.target.files[0]);
    } else {
      alert('FileReader are not supported in this browser.');
    }
  }

  const getAsText = (fileToRead) => {
    var reader = new FileReader();    
    reader.readAsText(fileToRead);
    reader.onload = loadHandler;
    reader.onerror = errorHandler;
  }*/

  /*const loadHandler = (event) => {
    var csv = event.target.result;
    processData(csv);
  }*/

  /*const processData = (csv) => {
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

    const documents = lines.map(line => (
      {
        document: line[1],
        firstname: line[2],
        lastname: ' ',
        username: line[1],
        email: `${line[1]}@temporal.com`,
        password: `Casoft.2019*`,
        jobTitle: line[3],
        cityName: line[4],
        firstDay: line[5],
        salary: {
          basic: +line[6].replace(/[.,]/g, ""),
          transport: +line[7].replace(/[.,]/g, "")
        },
      }
    ))
   
    uploadMasive(documents)
  }*/
  /*
    function errorHandler(evt) {
      if (evt.target.error.name == "NotReadableError") {
        alert("Canno't read file !");
      }
    }*/

  return (
    <Card>
      <CardHeader className="flex">
        Usuarios
        <div className="card-header-right">
          <Button color="success" size="sm">
            Importar
            {/*<Input type="file" className="file-hidden" onChange={handleFiles} accept=".csv" />*/}
          </Button>
          {/*<Button onClick={() => deleteOne(user._id)} color="info" size="sm">Nuevo</Button>*/}
        </div>
      </CardHeader>
      <CardBody>
        <Table responsive>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Cargo</th>
              <th>Email</th>
              <th>Teléfono</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map(user =>
              <tr key={user._id} >
                <td>{user.firstname} {user.lastname}</td>
                <td>{user.jobTitle}</td>
                <td>{user.email}</td>
                <td>{user.telephone}</td>
                <td>
                  <Link to={`/usuarios/${user._id}`} params={{ username: user.username }}>
                    <Button color="primary" size="sm">Editar</Button>
                  </Link>
                  <Button onClick={() => effects.deleteUser(user._id)} color="danger" size="sm">Eliminar</Button>
                </td>
              </tr>
            )}

          </tbody>
        </Table>
      </CardBody>
    </Card>
  )
}


export default widthState(injectState(UserList))
/*
List.getInitialProps = async ({ store, query }) => {
  await store.dispatch(findAll())
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    findAll,
    deleteOne,
    uploadMasive: (data) => {
      dispatch(uploadMasive(data))
    }
  }
}


function mapStateToProps(state) {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
*/
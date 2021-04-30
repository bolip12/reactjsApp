import React, { Component } from 'react';
import firebase from '../firebase';
import { withRouter } from "react-router-dom";
import { Button } from '@material-ui/core';

class UserScreen extends Component {
  
  constructor() {
    super();

    this.state = {
      dataUsers: []
    };

    this.db = firebase.firestore();
  }

  async fetchData() {
    let dataUsers = [];

    let query = this.db.collection('users');
    const docList = await query.get();
    docList.forEach(doc => {
      const docData = doc.data();
      console.log(docData)
      dataUsers.push({
        id : doc.id,
        nama: docData.nama,
        alamat: docData.alamat,
        email: docData.email,
      });
    });

    this.setState({dataUsers:dataUsers});

  }

  componentDidMount() {
    this.fetchData();
  }


  handleClick() {
    this.props.history.push("/useradd");
  }

  render() {
    return (
      <div>
        <h3>
        List User
        </h3>
        
        <Button variant="contained" color="primary" style={{ marginBottom:10 }} onClick={() => this.handleClick()}>Add User</Button>
        
        <table class="table table-stripe">
          <thead>
            <tr>
              <th>Nama</th>
              <th>Alamat</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {this.state.dataUsers.map(item =>
            <tr key={item.id}>
              <td>{item.nama}</td>
              <td>{item.alamat}</td>
              <td>{item.email}</td>
            </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }

}

export default withRouter(UserScreen);
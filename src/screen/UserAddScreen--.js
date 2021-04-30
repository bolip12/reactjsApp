import React, { Component } from 'react';
import firebase from '../firebase';
import { withRouter } from "react-router-dom";
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

class UserAddScreen extends Component {
  
  constructor() {
    super();

    this.state = {
      nama: '',
      email: '',
      alamat: ''
    }; 
    this.db = firebase.firestore();
  }


  async onSubmit() {

    let dataInsert = {nama: this.state.nama, alamat: this.state.alamat, email: this.state.email};
    console.log(dataInsert)
    await this.db.collection('users').add(dataInsert);

    this.props.history.push("/");

  }

  render() {

    return (
        <div>
          <h3>
            Add User
          </h3>

          <div class="panel-body">
            
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="nama">Nama:</label>
                <input type="text" class="form-control" name="nama" value={this.state.nama} onChange={(data) => this.setState({nama:data.target.value})} placeholder="Nama" />
              </div>
              <div class="form-group">
                <label for="alamat">Alamat:</label>
                <textArea class="form-control" name="alamat" onChange={(data) => this.setState({alamat:data.target.value})} placeholder="Alamat" rows="3">{this.state.alamat}</textArea>
              </div>
              <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" class="form-control" name="email" value={this.state.email} onChange={(data) => this.setState({email:data.target.value})} placeholder="Email" />
              </div>
              <Button 
                variant="contained" 
                color="primary"
                onClick={() => this.onSubmit()}
              >    
                Save
              </Button>
            </form>
          </div>
      </div>
        
    );
  }

}


export default withRouter(UserAddScreen);
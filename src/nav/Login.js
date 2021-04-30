import * as React from 'react';
import { withRouter } from "react-router-dom";

import AsyncStorage from '@react-native-async-storage/async-storage';
import firebase from '../config/firebase.js';
import store from '../config/storeApp';

import { Paper, withStyles, Grid, TextField, Button, Checkbox, Container, FormControlLabel, Box, CssBaseline, InputLabel, InputAdornment, Input, IconButton, Typography, FormControl} from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons'


const styles = theme => ({
    /*margin: {
        margin: theme.spacing.unit * 4,
    },
    padding: {
        padding: theme.spacing(1)
    },*/
    margin: {
	    margin: theme.spacing(1),
	},
    paper: {
	    marginTop: theme.spacing(8),
	    display: 'flex',
	    flexDirection: 'column',
	    alignItems: 'center',
	},
	form: {
	    width: '100%', // Fix IE 11 issue.
	    marginTop: theme.spacing(1),
	},
	submit: {
    	margin: theme.spacing(3, 0, 2),
	},
});

class Login extends React.Component {
	constructor(props) {
		super(props);

		this.state = store.getState();  
	    store.subscribe(()=>{
	      this.setState(store.getState());
	    });

		this.state = {
			...this.state,
	    	email: '',
	    	password: '',
	    	passwordHide: true,
	    	passwordIcon: 'eye',
	    	showPassword: false,
		}
		this.fs = firebase.firestore();
	}

	componentDidMount() {
		this.defaultValue();
	}

	async defaultValue() {
		let loginEmail = await AsyncStorage.getItem('@loginEmail');
		this.setState({ email:loginEmail });

		let loginPassword = await AsyncStorage.getItem('@loginPassword');
		this.setState({ password:loginPassword });
	}

	async onSubmit() {
		console.log(this.state.email, this.state.password)
	    //login process
	    await firebase.auth()
	      .signInWithEmailAndPassword(this.state.email, this.state.password)
	      .then((response) => {

	      	const userLogin = firebase.auth().currentUser;
	      	const uid = userLogin.uid;
    		const emailVerified = userLogin.emailVerified;
    		console.log(userLogin.uid)
    		//email verified
			if(emailVerified) {
	         
		        store.dispatch({
			        type: 'LOGIN',
			        payload: { isLogin:true}
		    	});
	        
	        } else {
	        	alert('Email Belum Diverifikasi');
	         
	        }
	        
	      })
	      .catch(error => {
	      	let errorMessage = '';
	        if(error.code == 'auth/user-not-found' || error.code == 'auth/wrong-password') {
	          errorMessage = 'Email & Password tidak cocok';
	        } else if(error.code == 'auth/too-many-requests') {
	          errorMessage = 'Terlalu banyak login gagal, coba lagi beberapa saat';
	        } else {
	          errorMessage = error.message;
	        }

	        alert(errorMessage)
	    });
		
	}

	passwordDisplay() {

		this.setState({showPassword: !this.state.showPassword});
	}

	render() {
		const { classes } = this.props;
        return (
           <Container component="main" maxWidth="xs">
           	
		      <CssBaseline />
		      <div className={classes.paper}>
		        
		        <Typography component="h1" variant="h5">
		          Sign in
		        </Typography>
		        <form className={classes.form}>

		          <TextField
		            fullWidth
		            required
		            margin="normal"
		            label="Email Address"
		            autoFocus
		            value={this.state.email}
		            onChange={(data) => this.setState({email:data.target.value})}
		          />
		          <FormControl fullWidth>
			          <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
			          <Input
			            id="standard-adornment-password"
			            type={this.state.showPassword ? 'text' : 'password'}
			            value={this.state.password}
			            onChange={(data) => this.setState({password:data.target.value})}
			            endAdornment={
			              <InputAdornment position="end">
			                <IconButton
			                  aria-label="toggle password visibility"
			                  onClick={() => this.passwordDisplay()}
			                >
			                  {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
			                </IconButton>
			              </InputAdornment>
			            }
			          />
		          </FormControl>
		          <FormControlLabel
		            control={<Checkbox value="remember" color="primary" />}
		            label="Remember me"
		          />
		          <Button
		            type="submit"
		            fullWidth
		            variant="contained"
		            color="primary"
		            className={classes.submit}
		            onClick={() => this.onSubmit()}
		          >
		            Sign In
		          </Button>
		           
		          
		        </form>
		      </div>
		      
			</Container>
		);
	}
}

export default withStyles(styles)(Login);




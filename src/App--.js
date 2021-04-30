import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import UserScreen from './screen/UserScreen';
import UserAddScreen from './screen/UserAddScreen';

class App extends Component {
	render() {
		return (
		   	<Router>
		      	<Switch>
		          <Route path="/useradd">
		            <UserAddScreen />
		          </Route>
		          <Route path="/">
		            <UserScreen />
		          </Route>
		        </Switch>
		    </Router>
		  );
	}
}

export default App;

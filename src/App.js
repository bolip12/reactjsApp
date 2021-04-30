import * as React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";

import store from './config/storeApp';

import Login from './nav/Login';
import UserNav from './nav/UserNav';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = store.getState();  
      store.subscribe(()=>{
        this.setState(store.getState());
      });

    this.state = {
      ...this.state,
    }
  }

  render() {
    return (
      <div>
        {this.state.isLogin ? <UserNav /> : <Login />}
        
      </div>  

    );
  }
}


export default App;

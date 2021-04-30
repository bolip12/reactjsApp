import * as React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";

import { 
  Drawer, 
  AppBar, 
  Button 
} from '@material-ui/core';

import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';

import Home from '../screen/Home';
import About from '../screen/About';

class UserNav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentScreen:0,
      redirect: false,
    }
  }

  onChangePage(value) {
    this.setState({redirect:true, currentScreen:value});
    
  }

  render() {
    const drawerWidth = 240;

    return (
      <Router>
          {this.state.redirect &&
            <Redirect to={this.state.currentScreen} />
          }

          <div style={{display:'flex'}}>
            <CssBaseline />
            <AppBar position="fixed" style={{zIndex: 1251}}>
              <Toolbar>
                <Typography variant="h6" noWrap>
                  kotakbon
                </Typography>
              </Toolbar>
            </AppBar>

            <Drawer
              variant="permanent"
              anchor="left"
              style={{width: drawerWidth}}
            >
              <Toolbar />
              <div style={{overflow:'auto'}}>  
           
                <List>
                    <ListItem button key={1} style={{marginRight:25}} onClick={() => this.onChangePage('/')} selected={this.state.currentScreen === '' ? true : false}>
                      <ListItemIcon><HomeIcon /></ListItemIcon>
                      <ListItemText primary="Home" />
                    </ListItem>
                </List>
                <List>
                    <ListItem button key={2} style={{marginRight:25}} onClick={() => this.onChangePage('/about')} selected={this.state.currentScreen === '/about' ? true : false}>
                      <ListItemIcon><PersonIcon /></ListItemIcon>
                      <ListItemText primary="About" />
                    </ListItem>
                </List>
              </div>
            </Drawer>

            <main style={{flexGrow:1, marginTop:75, marginRight:20, marginLeft:-50}}>
                <Switch>
                  <Route path="/about">
                    <About />
                  </Route>
                  <Route path="/">
                    <Home />
                  </Route>
                </Switch>
            </main>

          </div>
      </Router>

    );
  }
}


export default UserNav;

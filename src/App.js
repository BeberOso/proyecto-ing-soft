import React, { Component } from 'react';
import './App.css';
import {AppBar, IconMenu, MenuItem, IconButton} from 'material-ui';
import MoreVertIccon from 'material-ui/svg-icons/navigation/more-vert';
class App extends Component{

  state = {

    logged: true
  }

render()  {
    const Logged = () => (
      <IconMenu
      iconButtonElement={
        <IconButton ><MoreVertIccon/></IconButton>
      }
      targetOrigin={{horizontal: 'rigth', vertical: 'top'}}
      anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      >

      <MenuItem primaryText="Refresh"/>
      <MenuItem primaryText="Help"/>
      <MenuItem primaryText="Sign Out"/>
      </IconMenu>
    );

    return (
      <div className="App">
        <AppBar 
        title="Login"
        iconElementNameRight={this.state.logged ? <Logged/> : "Login"}
        />
        <login></login>
         <IconMenu
      iconButtonElement={
        <IconButton ><MoreVertIccon/></IconButton>
      }
      targetOrigin={{horizontal: 'rigth', vertical: 'top'}}
      anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      >

      <MenuItem primaryText="Refresh"/>
      <MenuItem primaryText="Help"/>
      <MenuItem primaryText="Sign Out"/>
      </IconMenu>
      </div>
    );
  };
  
 
  
}

export default App;

 

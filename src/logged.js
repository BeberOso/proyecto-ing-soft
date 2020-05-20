import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css'; 
import './App';
import {AppBar, IconMenu, MenuItem, IconButton, iconButtonElement} from 'material-ui';
import MoreVertIccon from 'material-ui/svg-icons/navigation/more-vert';

 

const Logged = () => {
    return(
    <IconMenu>
      iconButtonElement={
        <IconButton><MoreVertIccon /></IconButton>
      }
  
      targetOrigin ={{horizontal: 'right', vertical: 'top'}}
      anchorOrigin={{horizontal: 'right', vertical: 'top'}}
    
        <MenuItem primaryText='Refresh' />
        <MenuItem primaryText='Help'/>
        <MenuItem primaryText='Sign Out'></MenuItem>
  
      </IconMenu>
    );
  };


  export default Logged;

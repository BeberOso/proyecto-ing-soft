import React, {Component}  from 'react';
import { RaisedButton, FontIcon } from 'material-ui';
import {ActionLock} from 'material-ui/svg-icons/action/lock';

class Login extends Component{
    render(){
        return(
            <RaisedButton
                href="https://github.com/callemall/material-ui"
                target="_blank"
                label="Github Ling"
                secondary={true}
                style={StyleSheet.Button}
                icon={<ActionLock/>}
            ></RaisedButton>
        );
    }

}

export default Login;
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import MuiThemeprovider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';


const Mui = () => (
  <MuiThemeprovider>
    <App>

    </App>
  </MuiThemeprovider>

);
//injectTapEventPlugin.js() 


ReactDOM.render(
  <React.StrictMode>
    <Mui />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

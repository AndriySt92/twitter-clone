import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core/styles';
import {Provider} from 'react-redux'
import store from './redux/store'
import { theme } from './theme'
import './index.css';
import App from './App';


ReactDOM.render(

    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Router>
          <App />
        </Router>  
      </Provider>
    </ThemeProvider>,
  document.getElementById('root')
);




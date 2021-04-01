import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import FloatingActionButtonZoom from './Text'
import { BrowserRouter as Router, Route , BrowserRouter, Switch, useLocation } from "react-router-dom";
import Text from './Text'

ReactDOM.render(
  <Router>
      <Switch >
        <Route path = {"/"} component = {App}/>
      </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

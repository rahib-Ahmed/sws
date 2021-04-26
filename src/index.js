import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorkerRegistration';
import { BrowserRouter as Router, Route , BrowserRouter, Switch, useLocation } from "react-router-dom";
import Camera from './components/Camera';

ReactDOM.render(
  <Router history={BrowserRouter}>
      <Switch >
        <Route path = {"/"} exact component = {App}/>
        <Route path = {"/Camera"} exact  component = {Camera}/>
      </Switch>
  </Router>,
  document.getElementById('root')
);

serviceWorker.register()
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

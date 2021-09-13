import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { Undergrowth } from "./components/Undergrowth"
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Undergrowth />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

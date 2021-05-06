import React from 'react';
import ReactDOM from 'react-dom';
// Modules
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './index.css';
// Pages
import { Home } from './pages/home'
import { AboutUs } from './pages/aboutus';

ReactDOM.render(
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/aboutus" ><AboutUs /></Route>
        <Route path="/" ><Home /></Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

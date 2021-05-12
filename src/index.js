import React from 'react';
import ReactDOM from 'react-dom';
// Modules
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './index.css';
// Pages
import { Home } from './pages/home'
import { AboutUs } from './pages/aboutus';
import { Portfolio } from './pages/portfolio'
import { Eniak } from './pages/projects/eniak'
import { MainBhiAmbani } from './pages/projects/mainbhiambani'
import { TCSCFeedback } from './pages/projects/tscsfeedback'

ReactDOM.render(
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL} >
      <Switch>
        <Route path="/aboutus" ><AboutUs /></Route>
        <Route path="/portfolio" exact><Portfolio /></Route>
        <Route path="/portfolio/eniak"><Eniak /></Route>
        <Route path="/portfolio/mainbhiambani"><MainBhiAmbani /></Route>
        <Route path="/portfolio/tcscfeedback"><TCSCFeedback /></Route>
        <Route path="/" ><Home /></Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

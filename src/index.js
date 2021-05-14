import React from 'react';
import ReactDOM from 'react-dom';
// Modules
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './index.css';
// Component
import { NavMenu } from './molecules/navmenu'
// Pages
import { Home } from './pages/home'
import { AboutUs } from './pages/aboutus';
import { Portfolio } from './pages/portfolio'
import { ProjectEniak } from './pages/project-eniak'

ReactDOM.render(
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL} >
      <NavMenu />
      <Switch>
        <Route path="/aboutus" ><AboutUs /></Route>
        <Route path="/portfolio" exact><Portfolio /></Route>
        <Route path="/portfolio/eniak"><ProjectEniak /></Route>
        <Route path="/" ><Home /></Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

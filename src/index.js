import React from 'react';
import ReactDOM from 'react-dom';
// Modules
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './index.css';
import { NavMenu } from './molecules/navmenu'
import { Footer } from './molecules/footer'
// Pages
import { Home } from './pages/home'
import { AboutUs } from './pages/aboutus'
import { ContactUs } from './pages/contactus'
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
        <Route path="/contactus"><ContactUs /></Route>
        <Route path="/" ><Home /></Route>
      </Switch>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

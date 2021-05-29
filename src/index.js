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
import { Eniak } from './pages/projects/eniak'
import { MainBhiAmbani } from './pages/projects/mainbhiambani'
import { TCSCFeedback } from './pages/projects/tscsfeedback'
import { Itk } from './pages/projects/itk'
import { CodeForAll } from './pages/projects/codeforall'

ReactDOM.render(
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL} >
      <NavMenu />
      <Switch>
        <Route path="/aboutus" ><AboutUs /></Route>
        <Route path="/portfolio" exact><Portfolio /></Route>
        <Route path="/portfolio/eniak"><Eniak /></Route>
        <Route path="/portfolio/mainbhiambani"><MainBhiAmbani /></Route>
        <Route path="/portfolio/tcscfeedback"><TCSCFeedback /></Route>
        <Route path="/portfolio/itk"><Itk /></Route>
        <Route path="/portfolio/codeforall"><CodeForAll /></Route>
        <Route path="/contactus"><ContactUs /></Route>
        <Route path="/" ><Home /></Route>
      </Switch>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

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
// import { TCSCFeedback } from './pages/projects/tscsfeedback'
import { Itk } from './pages/projects/itk'
import { CodeForAll } from './pages/projects/codeforall'
import { Ninetyminapp } from './pages/projects/90minapp'
import { Doolally } from './pages/projects/doolally'
import { ArmorSecurity } from './pages/projects/armorsecurity'
import { AllSpaceVentures } from './pages/projects/allspaceventures'
import { Snapdeal } from './pages/projects/snapdeal'
import { AadhiyaranAgrarianServices } from './pages/projects/aadhiyaranagrarianservices'
import { Pathways } from './pages/projects/pathways'
import { Klm } from './pages/projects/klm'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <NavMenu />
      <Switch>
        <Route path="/aboutus" ><AboutUs /></Route>
        <Route path="/portfolio/eniak"><Eniak /></Route>
        <Route path="/portfolio/main-bhi-ambani"><MainBhiAmbani /></Route>
        {/* <Route path="/portfolio/tcsc-feedback"><TCSCFeedback /></Route> */}
        <Route path="/portfolio/itk"><Itk /></Route>
        <Route path="/portfolio/code-for-all"><CodeForAll /></Route>
        <Route path="/portfolio/90-min-app"><Ninetyminapp /></Route>
        <Route path="/portfolio/doolally"><Doolally /></Route>
        <Route path="/portfolio/armor-security"><ArmorSecurity /></Route>
        <Route path="/portfolio/allspace-ventures"><AllSpaceVentures /></Route>
        <Route path="/portfolio/snapdeal"><Snapdeal /></Route>
        <Route path="/portfolio/aadhiyaran-agrarian-services"><AadhiyaranAgrarianServices /></Route>
        <Route path="/portfolio/pathways"><Pathways /></Route>
        <Route path="/portfolio/klm"><Klm /></Route>
        <Route path="/portfolio"><Portfolio /></Route>
        <Route path="/contactus"><ContactUs /></Route>
        <Route path="/" ><Home /></Route>
      </Switch>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

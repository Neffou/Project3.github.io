import React from 'react';
import { Route, Switch} from 'react-router-dom';
import PageHeader from './header/PageHeader/PageHeader'
import ProjectSection from './ProjectSection/ProjectSection';
import Contact from './Contact/Contact/Contact';


import Footer from './Footer/Footer'
import Header from './header/Header'
import Home from './../screen/Home'
import Login from './../screen/Login'
import Tracking from './../screen/Tracking'
import Register from './../screen/Register'

import './App.css';



function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/tracking" component={Tracking} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />

      </Switch>
      
      <PageHeader/>
      <ProjectSection/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

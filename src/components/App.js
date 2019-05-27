import React from 'react';
import { Route, Switch} from 'react-router-dom';


import Header from './header/Header'
import Home from '../screen/Home'
import Login from '../screen/Login'
import Tracking from '../screen/Tracking'
import Register from '../screen/Register'

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
    </div>
  );
}

export default App;

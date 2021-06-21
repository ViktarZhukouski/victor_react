import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
import Home from './components/home/Home';
import Login from './components/login/login';
import RegisterContainer from '../src/containers/index';
import Geosearch from './components/geosearch';
import Contacts from './components/contacts';
import RegisterContain from '../src/containers/RegisterContain';
import Partners from './components/partners';
import './App.css';

const divStyle = {
  backgroundColor: 'yellow',
  display: 'flex',
  justifyContent: 'center',
  gap: '40px',
}


function App() {
  return (
    <Router>
      <div>
        <div style={divStyle}>
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/register">Register</Link>
          </div>
          <div>
            <Link to="/login">Login</Link>
          </div>
          <div>
            <Link to="/counter">Counter</Link>
          </div>
          <div>
            <Link to="/geosearch" >Geo</Link>
          </div>
          <div>
            <Link to="/contacts" >Our contacts</Link>
          </div>
          <div>
            <Link to="/partners" >Our partners</Link>
          </div>
        </div>
          <Route path='/' component = {Home} />
          <Route path='/counter' component = {RegisterContainer} />
          <Route path='/login' component = {Login} />
          <Route path='/geosearch' component ={Geosearch} />
          <Route path='/contacts' component ={Contacts} />
          <Route path='/register' component ={RegisterContain} />
          <Route path='/partners' component ={Partners} />
          <Redirect to={Home} />
      </div>
    </Router>
  );
}

export default App;

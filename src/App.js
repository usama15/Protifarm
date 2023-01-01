import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Home } from './pages/Home/Home';
import  Rates  from './pages/Rates/Rates';
import { Contact } from './pages/Contact/Contact';
import { useState } from 'react';
import { Footer } from './components/Footer/Footer';
import Nav from './components/Navbar/NavBar';
import { Intro } from './components/Intro/Intro';
import SearchVehicles from './pages/SearchVehicles/searchVehicles';

function App() {
  return (
    <Router >
      <Nav/>
      <Intro/>
      <Switch>
        <Route exact path='/'><Home /></Route>
        <Route exact path='/rates'><Rates /></Route>
        <Route exact path='/searchvehicles'><SearchVehicles /></Route>
        <Route exact path='/contact' ><Contact /></Route>
      </Switch>
    </Router>
  );
}

export default App;

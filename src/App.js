import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core";
import theme from "./theme";
import Navbar from './components/Navbar/Nav';
import { Home } from './pages/Home/Home';
import { Rates } from './pages/Rates/Rates';
import { Contact } from './pages/Contact/Contact';
import { useState } from 'react';
import { Footer } from './components/Footer/Footer';
import Nav from './components/Navbar/NavBar.jsx'

function App() {
  const [navOpen, setNavOpen] = useState(false);
  const handleNavbar = () => {
    setNavOpen(!navOpen);
    console.log(navOpen);
  }
  return (
    <Router >
      {/*<MuiThemeProvider theme={theme}>*/}
        <Navbar handleNavbar={handleNavbar}/>
      {/*  <Nav handleNavbar={handleNavbar}/>*/}
        <Switch>
          <Route exact path='/'><Home navOpen={navOpen} /></Route>
          <Route exact path='/rates'><Rates navOpen={navOpen} /></Route>
          <Route exact path='/contact' ><Contact navOpen={navOpen}/></Route>
        </Switch>
        <Footer />
      {/*</MuiThemeProvider>*/}
    </Router>
  );
}

export default App;

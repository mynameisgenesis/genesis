import React from 'react';
import './App.scss';
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Resume, Contact, About } from './pages/index';

export const NavLogo = () => {
  return(
      <div className="nav-logo">
          Genesis
      </div>
  );
};

const App = () => {

  return (
    <div className="App">
      <Router>
        <nav>
          <NavLogo />
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </nav>
        <Container id="main">
          <Switch>
            <Route exact path="/">
              <Resume />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </Container>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router,Link,Switch,Route } from 'react-router-dom';
import About from '../../pages/About/About';
import Resume from '../../pages/Resume/Resume';
import Contact from '../../pages/Contact/Contact';
import { Container } from 'react-bootstrap';

export const NavLogo = () => {
    return(
        <div className="nav-logo">
            Genesis
        </div>
    );
};

const Navigation = () => {
    return(     
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
    );
};

export default Navigation;
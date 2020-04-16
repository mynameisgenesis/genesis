import React from 'react';
import './App.scss';
import Navigation from './components/Navigation/Navigation';
import Resume from './components/Resume/Resume';
import Footer from "./components/Footer/Footer";
import { Container } from 'react-bootstrap';

const App = () => {

  return (
    <div className="App">
      <Navigation />
      <Container id="main">
        <Resume />
      </Container>
      <Footer />
    </div>
  );
}

export default App;

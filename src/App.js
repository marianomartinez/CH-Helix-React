import React from 'react';
//Components
// import Img from './components/Img';
// import Title from './components/Title';
// import ReactLink from './components/ReactLink';
import NavBar from './components/NavBar';
import Home from './components/Home';

import './App.css';
// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
// My master css file
import './master.css';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <Img />
    //     <Title text='Edit <code>src/App.js</code> and save to reload.' />
    //     <ReactLink />
    //   </header>
    // </div>
    <Container fluid className="vh-100 p-0 bg-dark">
      <NavBar />
      <Home />
    </Container>
  );
}

export default App;

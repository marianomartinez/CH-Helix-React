import React from 'react';
import Img from './components/Img';
import Title from './components/Title';
import ReactLink from './components/ReactLink';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Img />
        <Title text='Edit <code>src/App.js</code> and save to reload.' />
        <ReactLink />
      </header>
    </div>
  );
}

export default App;

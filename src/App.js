import React from 'react';

// React-router-dom
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import CartProvider /* , { CartContext }*/ from './context/CartContext';

//Components
// import Img from './components/Img';
// import Title from './components/Title';
// import ReactLink from './components/ReactLink';
import NavBar from './components/NavBar';
// import Home from './components/Home';
import ItemListContainer from './components/ItemListContainer';
import About from './components/About';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';

import './App.css';
// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// My master css file
import './master.css';

function App() {
  return (
    <CartProvider defaultCart={[]}>
      <BrowserRouter>
        <div className="container-fluid vh-100 p-0 bg-dark">
          <NavBar />
          <Switch> {/* Acá van mis rutas */}
            <Route exact path="/">
              <ItemListContainer />
            </Route>
            <Route exact path="/category/:categoryId">
              <ItemListContainer />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/item/:itemId">
              <ItemDetailContainer />
            </Route>
            <Route exact path="/cart">
              <Cart />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;

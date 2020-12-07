import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CartProvider /* , { CartContext }*/ from './context/CartContext';
import NavBar from './components/NavBar';
import Home from './components/Home';
import ItemDetailContainer from './components/ItemDetailContainer';
import About from './components/About';
import Cart from './components/Cart';
import OrderCompleted from './components/OrderCompleted';

// Imports CSS file
import './App.css';
// Imports Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// My master css file
import './master.css';

function App() {
  return (
    <CartProvider defaultCart={[]}>
      <BrowserRouter>
        <div className="container-fluid vh-100 p-0 bg-dark">
          <NavBar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/categories/:categoryId">
              <Home />
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
            <Route exact path="/orderCompleted">
              <OrderCompleted />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;

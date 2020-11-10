import React from 'react';

// Router
import { Link, NavLink } from 'react-router-dom';
// import { useCartContext } from '../context/CartContext';
// import { CartContext } from '../context/CartContext';


//Components
import CartWidget from './CartWidget';
// Bootstrap
import {Navbar, Nav, NavDropdown, Form, FormControl, Button, Dropdown} from 'react-bootstrap';
// My general css file
import '../master.css';


function NavBar() {

  // const { cart } = useCartContext(); // en el carrito, con cart.length, puedo ver cuántos items hay
  
  // El array de abajo lo hice con la intención de usar un .map para crear los NavDropdown.Item. 
  let categories = [
    { id: 1,
      name: 'Distortion' },
    { id: 2,
      name: 'Dynamics' },
    { id: 3,
      name: 'EQ' },
    { id: 4,
      name: 'Modulation' },
    { id: 5,
      name: 'Delay' },
    { id: 6,
      name: 'Reverb' },
    { id: 7,
      name: 'Pitch/Synth' },
    { id: 8,
      name: 'Filter' },
    { id: 9,
      name: 'Wah' },
    { id: 10,
      name: 'Guitar Amp' },
    { id: 11,
      name: 'Bass Amp' },
    { id: 12,
      name: 'Microphone' },
    { id: 13,
      name: 'Volume /Pan' },
    { id: 14,
      name: 'Looper' }
  ]

  return (
  <Navbar className="bg-secondary rounded-bottom" expand="md">
    <Navbar.Brand className="text-light" to="/">Helix Effects</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">

        {/* !!! Estoy pasando el dropdown a este formato para no usar el de abajo, pero al hacer clic no despliega el listado. Voy a seguir probando. */}
        <div className="dropdown" role="group" aria-label="...">
          {/* <li key={categories.id}>
            <Link className="btn btn-secondary rounded shadow-none" to="/" role="button">Home</Link>
          </li> */}
            <Link className="btn btn-secondary rounded shadow-none" to="/" role="button">Home</Link>
            <Link className="btn btn-secondary rounded shadow-none mx-1" to="/about" role="button">About</Link>
            {/* <button type="button" className="btn btn-secondary rounded shadow-none dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Categories
            </button>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#action">Action</a>
              <a className="dropdown-item" href="#action">Another action</a>
              <a className="dropdown-item" href="#action">Something else here</a>
              
            </div> */}
        </div>



        <Dropdown>
          <Dropdown.Toggle variant="secondary" className="border-0">Categories</Dropdown.Toggle>
          <Dropdown.Menu className="bg-secondary w-100">
          {categories.map((categories, id) => (
            <li key={categories.id}>
              <NavLink activeClassName="currentCategory" className="bg-secondary text-light" {...categories} key={id} to={`/categories/${categories.id}`}>{categories.name}</NavLink>
            </li>
          ))}
          </Dropdown.Menu>
        </Dropdown>


        {/* <NavDropdown className="bg-secondary" title="Categories">
          {categories.map((elements, id) => (
            <NavDropdown.Item className="bg-secondary text-light"
            {...elements} key={id} href={`#categories/${elements.name}`}>{elements.name}</NavDropdown.Item>))
          }
        </NavDropdown> */}


      </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <button className="btn btn-secondary shadow-none"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z" />
            <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
          </svg></button>
        </Form>
    </Navbar.Collapse>
    <CartWidget />
  </Navbar>
  )
}

export default NavBar;

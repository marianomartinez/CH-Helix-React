import React from 'react';
//Components
import CartWidget from './CartWidget';
// Bootstrap
import {Navbar, Nav, NavDropdown, Form, FormControl, Button, Dropdown} from 'react-bootstrap';
// My general css file
import '../master.css';


function NavBar() {
  
  // El array de abajo lo hice con la intención de usar un .map para crear los NavDropdown.Item. 
  let categories = [
    { name: 'Distortion' },
    { name: 'Dynamics' },
    { name: 'EQ' },
    { name: 'Modulation' },
    { name: 'Delay' },
    { name: 'Reverb' },
    { name: 'Pitch/Synth' },
    { name: 'Filter' },
    { name: 'Wah' },
    { name: 'Guitar Amp' },
    { name: 'Bass Amp' },
    { name: 'Microphone' },
    { name: 'Volume /Pan' },
    { name: 'Looper' }
  ]

  return (
  <Navbar className="bg-secondary rounded-bottom" expand="md">
    <Navbar.Brand className="text-light" href="#home">Helix Effects</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">

        {/* !!! Estoy pasando el dropdown a este formato para no usar el de abajo, pero al hacer clic no despliega el listado. Voy a seguir probando. */}
        <div className="dropdown" role="group" aria-label="...">
            <a className="btn btn-secondary rounded shadow-none" href="#home" role="button">Home</a>
            <a className="btn btn-secondary rounded shadow-none mx-1" href="#about" role="button">About</a>
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
          {categories.map((elements, i) => (
            <Nav.Link className="bg-secondary text-light"
            {...elements} key={i} href={`#categories/${elements.name}`}>{elements.name}</Nav.Link>))
          }
          </Dropdown.Menu>
        </Dropdown>


        {/* <NavDropdown className="bg-secondary" title="Categories">
          {categories.map((elements, i) => (
            <NavDropdown.Item className="bg-secondary text-light"
            {...elements} key={i} href={`#categories/${elements.name}`}>{elements.name}</NavDropdown.Item>))
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

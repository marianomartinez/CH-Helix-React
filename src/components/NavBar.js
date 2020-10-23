import React from 'react';
//Components
import CartWidget from './CartWidget';
// Bootstrap
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';

// El array de abajo lo hice con la intención de usar un .map para crear los NavDropdown.Item. 
// let categories = ['Distortion','Dynamics','EQ','Modulation','Delay','Reverb','Pitch/Synth','Filter','Wah','Guitar Amp','Bass Amp','Microphone','Volume/Pan','Looper']

function NavBar() {
  return (
  <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">Helix Effects</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        <NavDropdown title="Categories" id="basic-nav-dropdown">
            {/* categories.map((variant, idx) => (
              <NavDropdown.Item key={idx} variant={variant} href="#action/3.1">{variant}</NavDropdown.Item>
            )) */}
          <NavDropdown.Item href="#categories/3.1">Distortion</NavDropdown.Item>
          <NavDropdown.Item href="#categories/3.2">Dynamics</NavDropdown.Item>
          <NavDropdown.Item href="#categories/3.3">EQ</NavDropdown.Item>
          <NavDropdown.Item href="#categories/3.4">Modulation</NavDropdown.Item>
          <NavDropdown.Item href="#categories/3.5">Delay</NavDropdown.Item>
          <NavDropdown.Item href="#categories/3.6">Reverb</NavDropdown.Item>
          <NavDropdown.Item href="#categories/3.7">Pitch/Synth</NavDropdown.Item>
          <NavDropdown.Item href="#categories/3.8">Filter</NavDropdown.Item>
          <NavDropdown.Item href="#categories/3.9">Wah</NavDropdown.Item>
          <NavDropdown.Item href="#categories/3.10">Guitar Amp</NavDropdown.Item>
          <NavDropdown.Item href="#categories/3.11">Bass Amp</NavDropdown.Item>
          <NavDropdown.Item href="#categories/3.12">Mic Amp</NavDropdown.Item>
          <NavDropdown.Item href="#categories/3.13">Guitar Cabinet</NavDropdown.Item>
          <NavDropdown.Item href="#categories/3.14">Bass Cabinet</NavDropdown.Item>
          <NavDropdown.Item href="#categories/3.15">Microphone</NavDropdown.Item>
          <NavDropdown.Item href="#categories/3.16">Volume/Pan</NavDropdown.Item>
          <NavDropdown.Item href="#categories/3.17">Looper</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
    <CartWidget />
  </Navbar>
  )
}

export default NavBar;

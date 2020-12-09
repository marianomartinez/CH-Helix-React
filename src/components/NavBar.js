import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import { Navbar, Nav, Dropdown } from 'react-bootstrap';
import '../master.css';

function NavBar() {
  let categories = [
    { id: 1, name: 'Distortion' },
    { id: 2, name: 'Dynamics' },
    { id: 3, name: 'EQ' },
    { id: 4, name: 'Modulation' },
    { id: 5, name: 'Delay' },
    { id: 6, name: 'Reverb' },
    { id: 7, name: 'Pitch/Synth' },
    { id: 8, name: 'Filter' },
    { id: 9, name: 'Wah' },
    { id: 10, name: 'Guitar Amp' },
    { id: 11, name: 'Bass Amp' },
    { id: 12, name: 'Microphone' },
    { id: 13, name: 'Volume /Pan' },
    { id: 14, name: 'Looper' }
  ];

  return (
    <Navbar className="bg-secondary rounded-bottom" expand="md">
      <Navbar.Brand className="text-light" to="/">Helix Effects</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <div className="dropdown" role="group" aria-label="...">
            <Link className="btn btn-secondary rounded shadow-none" to="/" role="button">Home</Link>
          </div>
          <Dropdown>
            <Dropdown.Toggle variant="secondary" className="border-0">Categories</Dropdown.Toggle>
            <Dropdown.Menu className="bg-secondary w-100">
              {categories.map((categories, id) => (
                <li key={categories.id}>
                  <Link activeClassName="currentCategory" className="btn btn-secondary rounded shadow-none w-100" {...categories} key={id} to={`/categories/${categories.name}`}>{categories.name}</Link>
                </li>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Link className="btn btn-secondary rounded shadow-none mx-1" to="/about" role="button">About</Link>
        </Nav>
      </Navbar.Collapse>
      <CartWidget />
    </Navbar>
  )
};

export default NavBar;
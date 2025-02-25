import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './AppLayout.style.css';
import { Outlet } from 'react-router-dom';
import chanflixLogo from '../chanflix_logo.png';

const AppLayout = () => {
  return (
      <div>
        <Navbar expand="lg" className="bg-body-tertiary" id='navbar-self'>
        <Container fluid>
          <Navbar.Brand href="/" className='logo-class'>
            <img src={chanflixLogo} width={200}></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/" id='navlink-home'>Home</Nav.Link>
              <Nav.Link href="/movies" id='navlink-link'>Movies</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2 input"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet></Outlet>
    </div>
  )
}
export default AppLayout
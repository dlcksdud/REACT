import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './AppLayout.style.css';
import { Outlet, useNavigate } from 'react-router-dom';
import chanflixLogo from '../chanflix_logo.png';
import { useState } from 'react';

const AppLayout = () => {

  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const searchByKeyword = (e) => {
    e.preventDefault();
    // url 바꿔주기
    navigate(`/movies?q=${keyword}`);
    setKeyword("");
  }

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
            <Form className="d-flex" onSubmit={searchByKeyword}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2 input"
                aria-label="Search"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
              />
              <Button variant="outline-success" type='submit'>Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet></Outlet>
    </div>
  )
}
export default AppLayout
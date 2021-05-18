import React, {useState} from 'react';
import {Route, Switch, BrowserRouter, Link} from 'react-router-dom';
import { Navbar, Nav, Container, Form, FormControl,Button } from 'react-bootstrap';


function NavBar() {
  const [showNav, setShowNav] = useState(false);
    return (

      <>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/home">EdTech</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/home">Home</Nav.Link>
      <Nav.Link href="/login">Login</Nav.Link>
      <Nav.Link href="/register">Register</Nav.Link>
      <Nav.Link href="/resource">Resource</Nav.Link>

    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
  <br />
  </>

   

    )
}

export default NavBar

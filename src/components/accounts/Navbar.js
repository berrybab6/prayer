import React from 'react';

import { Navbar, Nav } from 'react-bootstrap';


function NavBar() {
  // const [showNav, setShowNav] = useState(false);
    return (

      <>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/resource">EdTech</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/home">Home</Nav.Link>
      <Nav.Link href="/resource">Resource</Nav.Link>
      <Nav.Link href="/todos">Todos</Nav.Link>

    </Nav>

    <Nav className="mr-sm-2"  inline >
      <Nav.Link href="/login" className="mr-sm-2" >Login</Nav.Link>
      
      <Nav.Link href="/register">Register</Nav.Link>

    </Nav>
    {/* <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form> */}
  </Navbar>
  <br />
  </>

   

    )
}

export default NavBar

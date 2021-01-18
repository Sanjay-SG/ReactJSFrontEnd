import React from "react"

import Navbar from 'react-bootstrap/Navbar'
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"
import { yellow } from "@material-ui/core/colors"
import { Link } from "react-router-dom"


const TopNav = () =>
{
    const styleNav =
    {
        // backgroundColor: "rgba(100, 100, 100, 0.5)"
        // backgroundColor: "#ffffff80"
        backgroundColor: "#ffffff00"

    }
    return(
        <>
        <Navbar style={styleNav}  collapseOnSelect expand="lg" bg="" variant="light" className="mb-8">
  <Link to="/"><Navbar.Brand href="#home">SSG-Online</Navbar.Brand></Link>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Link to = "/projects"><Nav.Link href="#features">Projects</Nav.Link></Link>
      {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
      {/* <NavDropdown title="Projects" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More info</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Learn more
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        </>
    )
}
export default TopNav;
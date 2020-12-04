import React, { useState } from "react"
import { Link } from "react-router-dom";

import {
    Container,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
    Row,
    Col
  } from 'reactstrap';

const Navbars = () =>
{

    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  

    return(
        <>
        <Container className="themed-container" fluid={true}>
        <Row>
          <Col>
            
           {/* <Navbar color="primary" light expand="md"> */}
           <Navbar color="primary" light expand="md">
           {/* <Navbar color="#FFC300" style={{backgroundColor:"#FFC300"}} light expand="md"> */}
        <NavbarBrand href="/" style={{color:"white"}}>Home</NavbarBrand>
        {/* <Link  tag="a" to="/" action><NavbarBrand href="/" style={{color:"white"}}> HOME </NavbarBrand></Link> */}

        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
            <Link style={{ fontSize:"2"}} tag="a" to="/appnav" action><NavLink href="" style={{color:"white"}}>APP</NavLink></Link>
            </NavItem>
            <NavItem>
              <NavLink href="#" style={{color:"white"}}>PROJECT</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret style={{color:"white"}}>
                OPTIONS
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  OPTION 1
                </DropdownItem>
                <DropdownItem>
                  OPTION 2
                </DropdownItem>
                {/* <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem> */}
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText style={{color:"white"}}>ABOUT</NavbarText>
        </Collapse>
      </Navbar>
      
      </Col>
      </Row>
      </Container>
        </>
    )
}

export default Navbars;
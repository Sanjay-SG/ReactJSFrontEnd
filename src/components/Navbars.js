import React from "react"
import { Link } from "react-router-dom";

import {
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
    NavbarText
  } from 'reactstrap';

const Navbars = () =>
{
    return(
        <>
           <Navbar color="primary" light expand="md">
        {/* <NavbarBrand href="/" style={{color:"white"}}>Home</NavbarBrand> */}
        <Link  tag="a" to="/" action><NavbarBrand href="/" style={{color:"white"}}> Home</NavbarBrand></Link>

        <NavbarToggler  />
        <Collapse navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
            <Link  tag="a" to="/appnav" action><NavLink href="" style={{color:"white"}}>App</NavLink></Link>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap" style={{color:"white"}}>GitHub</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret style={{color:"white"}}>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText style={{color:"white"}}>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
        </>
    )
}

export default Navbars;
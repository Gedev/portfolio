import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Nav, Navbar, NavbarBrand, NavItem } from 'react-bootstrap'
import NavbarToggle from "react-bootstrap/NavbarToggle";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";

const Header = ({ siteTitle }) => (
  <header>
    <Navbar>
      <NavbarBrand href="/">
        {siteTitle}
      </NavbarBrand>
      <NavbarToggle aria-controls="navbarResponsive" />
      <NavbarCollapse id="navbarResponsive">
        <Nav as="ul">
          <NavItem as="li">
            <Link to="/#home" className="nav-link" activeClassName="active">
              Home
            </Link>
          </NavItem>
          <NavItem as="li">
            <Link to="/#profile" className="nav-link" activeClassName="active">
            Profile
            </Link>
          </NavItem>
          <NavItem as="li">
            <Link to="/#skills" className="nav-link" activeClassName="active">
            Skills
            </Link>
          </NavItem>
          <NavItem as="li">
            <Link to="/#side-projects" className="nav-link" activeClassName="active">
              Side Projects
            </Link>
          </NavItem>
          <NavItem as="li">
            <Link to="/#contact" className="nav-link" activeClassName="active">
              Contact me
            </Link>
          </NavItem>
        </Nav>
      </NavbarCollapse>
    </Navbar>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

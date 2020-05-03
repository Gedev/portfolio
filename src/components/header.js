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
            <Link to="/page-2" className="nav-link" activeClassName="active">
              Page 2
            </Link>
          </NavItem>
          <NavItem as="li">
            <Link to="/page-2" className="nav-link" activeClassName="active">
            Profile
            </Link>
          </NavItem>
          <NavItem as="li">
            <Link to="/page-2" className="nav-link" activeClassName="active">
            Skills
            </Link>
          </NavItem>
          <NavItem as="li">
            <Link to="/page-2" className="nav-link" activeClassName="active">
              Onglet 4
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

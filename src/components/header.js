import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Nav, Navbar, NavbarBrand, NavItem } from 'react-bootstrap'
import NavbarToggle from "react-bootstrap/NavbarToggle";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";

import githubLogo from "../images/software-development-logos/png/010-github.png";
import linkedinLogo from "../images/1384004-social-media/png/010-linkedin.png";
import twitterLogo from "../images/1384004-social-media/png/013-twitter.png";

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
            About me
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

        <Nav as="ul" id="navLogos">
          <p >
            <a href="https://gedev346235801.wordpress.com">My blog</a>
            <a href="https://github.com/Gedev"><img src={githubLogo} alt="html5Logo" /></a>
            <a href="https://www.linkedin.com/in/gerald-devreux-57940413b" target="_blank" rel="noopener noreferrer"><img src={linkedinLogo} alt="linkedinLogo" /></a>
            <a href="https://twitter.com/Gedev5" target="_blank" rel="noopener noreferrer"><img src={twitterLogo} alt="twitterLogo" /></a>
          </p>
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

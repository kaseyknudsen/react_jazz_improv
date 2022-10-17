import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  Nav,
  NavItem,
} from "reactstrap";
//ms-auto handles the left margin
//navbar: the reactstrap library will translate the nav component into an html navelement with the bootstrap class of navbar
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <Navbar light className="custom-nav-bar row-style" sticky="top" expand="lg">
        <NavbarBrand className="ms-1" href="/">
          <h1>The Jazz Theory Website</h1>
          <h4>Your Go-To Practice Tool</h4>
        </NavbarBrand>
        <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
        <Collapse navbar isOpen={menuOpen}>
          <Nav vertical className="ms-auto" navbar>
            <NavItem>
              <NavLink className="nav-link" id="navLink" to="/">
                <i className="fa fa-home fa-lg"/> Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" id="navLink"  to="/ear_training">
              <i className="fa fa-headphones fa-lg"/> Ear Training
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" id="navLink" to="/theory_page">
              <i className="fa fa-music"/> Theory
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" id="navLink" to="/repertoire_page">
              <i className="fa fa-list-ul fa-lg"/> Repertoire
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" id="navLink" to="/practice_routines">
              <i className="fa fa-check fa-lg"/> Practice Routines
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" id="navLink" to="/contact_me">
              <i className="fa fa-mobile fa-lg"/> Contact Me
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
};

export default Header;

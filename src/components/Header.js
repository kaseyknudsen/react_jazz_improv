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
      <Navbar dark className="custom-nav-bar row-style" sticky="top" expand="lg">
        <NavbarBrand className="ms-1" href="/">
          <h1>The Jazz Theory Website</h1>
          <h4>Your Go-To Practice Tool</h4>
        </NavbarBrand>
        <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
        <Collapse navbar isOpen={menuOpen}>
          <Nav class="ms-auto" navbar>
            <NavItem>
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/ear_training">
                Ear Training
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/theory_page">
                Theory
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/repertoire_page">
                Repertoire
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/practice_routines">
                Practice Routines
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/contact_me">
                Contact Me
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
};

export default Header;

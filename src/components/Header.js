import { useState } from "react";
import { NavLink } from "react-router-dom"; 
import { Navbar,
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem,
    Container,
    Row,
    Col
} from "reactstrap";

const Header = () => {
    return (
        <div className="header-content">
            <Navbar className='header' expand='md'>
                <NavbarBrand className="ms-5">
                    <div>
                    <h1>The Jazz Theory Website</h1>
                    <h4>Your Go-To Practice Tool</h4>
                    </div>
                </NavbarBrand>
            </Navbar>
            <Nav className="navClass">
                <NavItem>
                    <NavLink className='nav-link' to='/'>
                        Home
                    </NavLink>    
                </NavItem>
                <NavItem>
                    <NavLink className='nav-link' to='/ear_training'>
                        Ear Training
                    </NavLink>    
                </NavItem>
                <NavItem>
                    <NavLink className='nav-link' to='/theory_page'>
                        Theory
                    </NavLink>    
                </NavItem>
                <NavItem>
                    <NavLink className='nav-link' to='/repertoire_page'>
                        Repertoire
                    </NavLink>    
                </NavItem>
                <NavItem>
                    <NavLink className='nav-link' to='/practice_routines'>
                        Practice Routines
                    </NavLink>    
                </NavItem>
                <NavItem>
                    <NavLink className='nav-link' to='/contact_me'>
                        Contact Me
                    </NavLink>    
                </NavItem>
            </Nav>

        </div>
    )
}

export default Header;
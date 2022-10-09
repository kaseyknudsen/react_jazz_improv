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
            <Navbar className='header' sticky='top' expand='md'>
                <NavbarBrand className="ms-5">
                    <div>
                    <h1>The Jazz Theory Website</h1>
                    <h4>Your Go-To Practice Tool</h4>
                    </div>
                </NavbarBrand>
            </Navbar>
        </div>
    )
}

export default Header;
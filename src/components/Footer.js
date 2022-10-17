import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="siteFooter">
      <Container>
        <Row className="mt-5">
          <Col sm="6" md="4" className="mt-4">
            <h5 className="footer-titles">Social Media</h5>
            <ul className="list-unstyled">
              <a className="btn btn-social-icon" target='blank' href="http://instagram.com/">
                <i className="fa fa-lg fa-instagram" />
              </a>
              <a className="btn btn-social-icon" target='blank' href="http://facebook.com/">
                <i className="fa fa-lg fa-facebook" />
              </a>
              <a className="btn btn-social-icon" target='blank' href="http://twitter.com/">
                <i className="fa fa-lg fa-twitter" />
              </a>
              <a className="btn btn-social-icon" target='blank' href="http://youtube.com/">
                <i className="fa fa-lg fa-youtube" />
              </a>
            </ul>
          </Col>

          <Col sm="6" md="4" className="mt-4">
            <h5 className="footer-titles">Page Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/" id="navLink">Home</Link>
              </li>
              <li>
                <Link to="/ear_training" id="navLink">Ear Training</Link>
              </li>
              <li>
                <Link to="/theory_page" id="navLink">Theory</Link>
              </li>
              <li>
                <Link to="/repertoire_page" id="navLink">Repertoire</Link>
              </li>
              <li>
                <Link to="/practice_routines" id="navLink">Practice Routines</Link>
              </li>
              <li>
                <Link to="/contact_me" id="navLink">Contact Me</Link>
              </li>
            </ul>
          </Col>

          <Col sm="6" md="4" className="mt-4">
            <h5 className="footer-titles">Connect With Me</h5>
            <a role="button" className="btn btn-link" id="navLink" href="tel:+510-381-1078">
              <i className="fa fa-phone-square fa-lg" /> 510-381-1078
            </a>
            <div>
              <a role="button" href="mailto:kaseyknudsen@gmail.com" id="navLink">
                <i className="fa fa-envelope-o fa-lg" /> kaseyknudsen@gmail.com
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

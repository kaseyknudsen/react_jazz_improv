import SubHeader from "../components/Subheader";
import { Container, Row, Col } from "reactstrap";
import ContactForm from "../components/ContactForm";

const ContactMePage = () => {
  return (
    <Container>
      <SubHeader current="Contact Me" />
      <Row className="row-style">
        <Col xs="12">
          <a
            role="button"
            className="btn btn-link"
            id="navLink"
            href="tel:+510-381-1078"
          >
            <i className="fa fa-phone" /> Phone: 510-381-1078
          </a>
          <br />
          <a
            role="button"
            className="btn btn-link"
            id="navLink"
            href="email:kaseyknudsen@gmail.com"
          >
            <i className="fa fa-envelope" /> Email: kaseyknudsen@gmail.com
          </a>
        </Col>
      </Row>
      <Row className="row-style">
        <Col xs="12">
          <h2 className="text-center mb-5">Contact Me!</h2>
        </Col>
        <Col md="10">
          <ContactForm />
        </Col>
      </Row>
    </Container>
  );
};

export default ContactMePage;

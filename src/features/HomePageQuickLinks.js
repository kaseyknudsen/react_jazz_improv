import { quickLinks } from "../QUESTIONS/quickLinks";
import QuickLinkCard from "./QuickLinkCard";
import { Row, Col, } from "reactstrap";

const HomePageQuickLinks = () => {
  return (
    <>
      <Row className="text-center mt-5">
        <Col xs="12">
          <h1>Quick Links</h1>
        </Col>
      </Row>
      <Row className="mt-3 mx-auto">
        {quickLinks.map((quickLink, index) => {
          return (
            <Col sm='6' lg='3' key={quickLinks.id}>
              <QuickLinkCard text={quickLink.text} image={quickLink.image} />
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default HomePageQuickLinks;

import { quickLinks } from "../QUESTIONS/quickLinks";
import QuickLinkCard from "./QuickLinkCard";
import { Row, Col, Card, CardBody, CardHeader } from "reactstrap";

const HomePageQuickLinks = () => {
  return (
    <>
      <Row className="text-center mt-5">
        <Col xs="12">
          <h1>Quick Links</h1>
        </Col>
      </Row>
      <Row className="mt-4">
        {quickLinks.map((quickLink, index) => {
          return (
            <Col xs="3" id={quickLinks.id}>
              <QuickLinkCard text={quickLink.text} />
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default HomePageQuickLinks;

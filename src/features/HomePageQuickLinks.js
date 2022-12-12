import { quickLinks } from "../QUESTIONS/quickLinks";
import QuickLinkCard from "./cards/QuickLinkCard";
import { Row, Col } from "reactstrap";

const HomePageQuickLinks = () => {
  return (
    <>
      <Row className="text-center mt-5">
        <Col xs="12">
          <h1>Quick Links</h1>
        </Col>
      </Row>
      <Row className="mt-3 mx-auto">
        {quickLinks.map((quickLink) => {
          return (
            <Col sm="6" lg="3" className="mx-auto" key={quickLinks.id}>
              <QuickLinkCard
                text={quickLink.text}
                image={quickLink.image}
                route={quickLink.route}
              />
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default HomePageQuickLinks;

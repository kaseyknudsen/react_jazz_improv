import { Col, Row, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";

const SubHeader = ({ current }) => {
  return (
    <Row className="mt-3 ms-auto">
      <Col className>
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/" id="navLink">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>{current}</BreadcrumbItem>
        </Breadcrumb>
        <h5>{current}</h5>
        <hr />
      </Col>
    </Row>
  );
};

export default SubHeader;

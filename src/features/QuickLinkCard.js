import { Card, CardImg, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

const QuickLinkCard = ({ image, text, name, route }) => {
  return (
    <>
      <Link to={route} style={{ textDecoration: "none" }}>
        <Card className="card card-grow">
          <CardImg src={image} alt={name} />
          <CardBody className="card-body text-center">
            <p className="card-text">{text}</p>
          </CardBody>
        </Card>
      </Link>
    </>
  );
};

export default QuickLinkCard;

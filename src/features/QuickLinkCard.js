import { Card, CardImg, CardBody } from "reactstrap";

const QuickLinkCard = ({ image, text, name }) => {
  return (
    <>
      <Card className="card card-grow">
        <CardImg src={image} alt={name} />
        <CardBody className="card-body text-center">
          <p className="card-text">{text}</p>
        </CardBody>
      </Card>
    </>
  );
};

export default QuickLinkCard;

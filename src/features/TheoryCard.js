import { Card, CardBody, CardTitle, CardText, CardImg } from "reactstrap";

const TheoryCard = ({ title, question, image }) => {
  return (
    <>
      <Card className="card">
        <CardImg src={image} alt={title} />
        <CardBody className="card-body text-center">
          <CardTitle>{title}</CardTitle>
          <p className="card-text">{question}</p>
        </CardBody>
      </Card>
    </>
  );
};

export default TheoryCard;

import { Card, CardText, CardBody, CardImg } from "reactstrap";

const GuessIntervalAnswerCard = ({ image, name }) => {
  return (
    <Card className="card-grow">
      <CardBody>
        <CardText className="text-center">
          <h4>{name}</h4>
        </CardText>
      </CardBody>
      <CardImg src={image} className="w-75 mx-auto mb-4" />
    </Card>
  );
};

export default GuessIntervalAnswerCard;

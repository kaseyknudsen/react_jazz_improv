import { Card, CardText, CardBody, CardImg } from "reactstrap";

const GuessIntervalAnswerCard = ({ image, name }) => {
  return (
    <Card className="card card-grow">
      
        <CardBody>
          <CardText className="text-center"><h5>Click Me to See the Answer!</h5></CardText>
        </CardBody>
    </Card>
  );
};

export default GuessIntervalAnswerCard;

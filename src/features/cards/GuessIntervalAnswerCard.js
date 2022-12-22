import { Card, CardText, CardBody, CardImg } from "reactstrap";

const GuessIntervalAnswerCard = ({ image, name }) => {
  return (
    <Card className="card card-grow">
      
        <CardBody>
          <CardText className="text-center"><h5>{name}</h5></CardText>
        </CardBody>
        <CardImg src={image} className="w-75 mx-auto mb-4"/>
    </Card>
  );
};

export default GuessIntervalAnswerCard;

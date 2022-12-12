import { Card, CardBody, CardText } from "reactstrap";

const TheoryOptionsCard = ({ topic }) => {
  return (
    <Card className="card card-grow">
      <CardBody>
        <CardText className="text-center">
          <h4>{topic}</h4>
        </CardText>
      </CardBody>
    </Card>
  );
};

export default TheoryOptionsCard;

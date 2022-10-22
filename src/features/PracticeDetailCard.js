import { Card, CardBody, CardText, CardTitle, Button } from "reactstrap";

const PracticeDetailCard = (chosenRoutine) => {
  const { title, text } = chosenRoutine;
  return (
    <Card className="text-center">
      <CardBody>
        <CardTitle>
          <h4>{title}</h4>
        </CardTitle>
        <CardText>
          <h5>{text}</h5>
        </CardText>
        <Button className="btn" id="button"><h5>Click Here For A Detailed Plan</h5></Button>
      </CardBody>
    </Card>
  );
};

export default PracticeDetailCard;

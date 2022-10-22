import { Card, CardBody, CardText } from "reactstrap";

const PracticeRoutineCard = (routine) => {
  const { title, text } = routine;
  return (
    <Card>
      <CardBody><h4 className="text-center">{title}</h4></CardBody>
      <CardText><h4 className="text-center">{text}</h4></CardText>
    </Card>
  );
};

export default PracticeRoutineCard;

import { Card, CardBody, CardText } from "reactstrap";

const ChooseRepertoireCard = ( {title} ) => {
  return (
    <Card className="card card-grow mt-5">
      <CardBody>
        <CardText className="text-center">
          <h4>{title}</h4>
        </CardText>
      </CardBody>
    </Card>
  );
};

export default ChooseRepertoireCard;
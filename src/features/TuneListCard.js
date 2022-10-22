import { Card, CardBody, CardText, CardTitle } from "reactstrap";

const TuneListCard = ({title, text}) => {
  return (
    <Card className="text-center">
      <CardBody>
        <CardTitle>
          <h4>{title}</h4>
        </CardTitle>
        <CardText>
          <h5>{text}</h5>
        </CardText>
      </CardBody>
    </Card>
  );
};

export default TuneListCard;
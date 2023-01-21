import { Card, CardHeader, CardBody, CardImg } from "reactstrap";

const ChromaticIntervalCard = ({ interval, image, name }) => {
  return (
    <Card className="interval-cards">
      <CardHeader className="text-center">
        <h5>{interval}</h5>
      </CardHeader>
      <CardBody>
        <CardImg src={image} alt={name} style={{height:'100%'}}  />
      </CardBody>
    </Card>
  );
};

export default ChromaticIntervalCard;
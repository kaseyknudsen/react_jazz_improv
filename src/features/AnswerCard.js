import { Card, CardBody } from "reactstrap";

const AnswerCard = ({ answer }) => {
  return (
    <>
      <Card className="card card-grow">
        <CardBody className="card-body text-center">
          <p className="card-text">{answer}</p>
        </CardBody>
      </Card>
    </>
  );
};
 export default AnswerCard;
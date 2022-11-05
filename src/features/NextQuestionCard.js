import { Card, CardBody } from "reactstrap";

const NextQuestionCard = () => {
  return (
    <>
      <Card className="card card-grow">
        <CardBody className="card-body text-center">
          <p className="card-text">{"Click Here For Another Question"}</p>
        </CardBody>
      </Card>
    </>
  );
};
export default NextQuestionCard;

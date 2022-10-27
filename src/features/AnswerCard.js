import { useEffect } from "react";
import { Card, CardTitle, CardBody } from "reactstrap";

export const AnswerCard = ({ title, answer }) => {
  return (
    <>
      <Card className="card card-grow">
        <CardBody className="card-body text-center">
          <CardTitle>{title}</CardTitle>
          <p className="card-text">{answer}</p>
        </CardBody>
      </Card>
    </>
  );
};

export const ReadyForTheAnswer = () => {
  return (
    <Card>
      <CardBody>
        <CardTitle>
          <p>{"Ready to see the answer?"}</p>
        </CardTitle>
      </CardBody>
    </Card>
  );
};

import { Col, Row, Card, CardBody } from "reactstrap";
import { useState } from "react";
import PracticeRoutineChoices from "./PracticeRoutineChoices";
import { practiceRoutineCards } from "../app/PracticeRoutines/practiceRoutineCards";

const DisplayPracticeRoutines = () => {
  const [detailedPlan, setDetailedPlan] = useState(
    "*** Click a link below to see a detailed practice routine ***"
  );

  return (
    <>
      <h1 className="text-center mb-4">Practice Routines</h1>
      <Row>
        <Col sm="5" className="mx-auto mb-5">
          <Card>
            <CardBody style={{ textAlign: "center" }}>
              <h5>{detailedPlan}</h5>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        {practiceRoutineCards.map((routine, index) => {
          return (
            <Col
              sm="7"
              className="mx-auto mt-3 text-center"
              onClick={() => setDetailedPlan(routine.routineCard)}
            >
              <PracticeRoutineChoices title={routine.title} key={index} />
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default DisplayPracticeRoutines;

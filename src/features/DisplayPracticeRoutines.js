import { Col, Row } from "reactstrap";
import { useState } from "react";
import PracticeRoutineCard from "./PracticeRoutineCard";
import PracticeDetailCard from "./PracticeDetailCard";
import { practiceRoutineData } from "../app/PracticeRoutines/practiceRoutineData";

const DisplayPracticeRoutines = () => {
  const [practiceRoutine, setPracticeRoutine] = useState({text: "Click on a Plan Below!"});

  return (
    <>
      <h1 className="text-center mb-4">Practice Routines</h1>
      <Row>
        <Col sm='6' className="mx-auto mb-4">
            <PracticeDetailCard title={practiceRoutine.title} text={practiceRoutine.text}/>
        </Col>
      </Row>
      <Row>
        {practiceRoutineData.map((routine, index) => {
          return (
            <Col
              sm="7"
              className="mx-auto mt-3 text-center"
              onClick={() => setPracticeRoutine(routine)}
            >
              <PracticeRoutineCard title={routine.title} key={index} />
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default DisplayPracticeRoutines;

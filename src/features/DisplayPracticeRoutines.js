import { Col, Row, Button, Card } from "reactstrap";
import { useState } from "react";
import PracticeRoutineCard from "./PracticeRoutineCard";
import { practiceRoutineCards } from "../app/PracticeRoutines/practiceRoutineCards";
import PracticeRoutineDetails from "../app/PracticeRoutines/PracticeRoutineDetails";
import ThirtyMinuteRoutine from "../app/PracticeRoutines/ThirtyMinuteRoutine";
import OneHourRoutine from "../app/PracticeRoutines/OneHourRoutine";
import TwoHourRoutine from "../app/PracticeRoutines/TwoHourRoutine";
import ThreeHourRoutine from "../app/PracticeRoutines/Three_Hour_Routine";

const DisplayPracticeRoutines = () => {
  const [detailedPlan, setDetailedPlan] = useState("");

  const setRoutine = () => {
    setDetailedPlan("hello");
  };

  return (
    <>
      <h1 className="text-center mb-4">Practice Routines</h1>
      <Row>
        <Col sm="4" className="mx-auto mb-5" onClick={() => setRoutine()}>
          <ThirtyMinuteRoutine />
        </Col>
      </Row>
      <Row>
        {practiceRoutineCards.map((routine, index) => {
          return (
            <Col sm="7" className="mx-auto mt-3 text-center">
              <PracticeRoutineCard title={routine.title} key={index} />
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default DisplayPracticeRoutines;

import { Card, CardBody, CardHeader, Button } from "reactstrap";

const ThirtyMinuteRoutine = () => {
  return (
    <Card>
      <CardBody>
        <CardHeader className="practice_routine_header">
          <h4>30 Minute Daily Practice Routine</h4>
        </CardHeader>
        <h5 className="mt-4" style={{ textAlign: "center" }}>
          Remember To Use A Timer and a Metronome!
        </h5>
        <div className="practice_routine_list">
          <ul>
            <li>10 minutes: Vocabulary or Technique Exercise</li>
            <li>10 minutes: Etude or Transcription</li>
            <li>10 minutes: Repertoire</li>
          </ul>
        </div>
      </CardBody>
    </Card>
  );
};

export default ThirtyMinuteRoutine;

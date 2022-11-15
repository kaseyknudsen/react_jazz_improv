import { Card, CardBody, CardHeader, Button } from "reactstrap";

const ThreeHourRoutine = () => {
  return (
    <Card>
      <CardBody>
        <CardHeader className="practice_routine_header">
          <h4>3 Hour Daily Practice Routine</h4>
        </CardHeader>
        <h5 className="mt-4" style={{ textAlign: "center" }}>
          Remember To Use A Timer and a Metronome!
        </h5>
        <div className="practice_routine_list">
          <ul>
            <li>10 minutes: Long Tones</li>
            <li>10 minutes: Overtones</li>
            <li>10 minutes: Etude</li>
            <li>30 minutes: Vocabulary Exercise</li>
            <li>30 minutes: Technique Exercise/Pattern</li>
            <li>45 minutes: Transcription</li>
            <li>45 minutes: Repertoire</li>
          </ul>
        </div>
      </CardBody>
    </Card>
  );
};

export default ThreeHourRoutine;

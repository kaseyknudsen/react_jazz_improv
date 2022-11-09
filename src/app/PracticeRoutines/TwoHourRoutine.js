import { Card, CardBody, CardHeader, Button } from "reactstrap";

const TwoHourRoutine = () => {
  return (
    <Card>
      <CardBody>
        <CardHeader className="practice_routine_header">
          Remember To Use A Timer and a Metronome!
        </CardHeader>
        <div className="practice_routine_list">
          <ul>
            <li>10 minutes: Long Tones</li>
            <li>10 minutes: Overtones</li>
            <li>20 minutes: Vocabulary Exercise</li>
            <li>20 minutes: Technique/Pattern Exercise</li>
            <li>20 minutes: Repertoire</li>
            <li>10 minutes: Sight Reading</li>
            <li>30 minutes: Transcription</li>
          </ul>
        </div>
      </CardBody>
    </Card>
  );
};

export default TwoHourRoutine;

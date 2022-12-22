import { useState } from "react";
import { Row, Col, Container } from "reactstrap";
import MajorScaleCard from "./cards/MajorScaleCard";
import BbMajorIntervalCard from "./cards/BbMajorIntervalCard";
import GuessIntervalCard from "./cards/GuessIntervalCard";
import GuessIntervalAnswerCard from "./cards/GuessIntervalAnswerCard";
import { altoSaxBbMajorScale } from "../EARTRAINING/MajorScaleIntervals";
import Bb_Major_Scale from "../EARTRAINING/Bb_MajorScale/Bb_Major_Scale.png";

const MajorScaleIntervalTrainer = () => {
  const [currentInterval, setCurrentInterval] = useState(
    altoSaxBbMajorScale[0]
  );
  const [currentRandomInterval, setCurrentRandomInterval] = useState(
    altoSaxBbMajorScale[0]
  );
  const [randomIntervalAnswer, setRandomIntervalAnswer] = useState(
     altoSaxBbMajorScale
  );

  //function that plays an interval of the Bb major scale
  const playMajorInterval = (interval) => {
    const note1 = interval.audioFile1;
    const note2 = interval.audioFile2;
    note1.play();
    setTimeout(() => note2.play(), 1300);
  };

  //function that plays a random sequence from the Bb major scale
  const randomMajorSequence = () => {
    const intervalIndex = Math.floor(
      Math.random() * altoSaxBbMajorScale.length
    );
    const randomMajInterval = altoSaxBbMajorScale[intervalIndex];
    playMajorInterval(randomMajInterval);
    setRandomIntervalAnswer("")
    return randomMajInterval;
  };

  //function to update the major interval answer card
  const showAnswer = () => {
    setRandomIntervalAnswer(currentRandomInterval);
  };

  return (
    <Container style={{ maxWidth: 750 }}>
      <Row>
        <h2 style={{ textAlign: "center" }}>Major Scale Interval Trainer</h2>
      </Row>
      <Row>
        <h5 style={{ textAlign: "center" }}>(Transposed for Alto Saxophone)</h5>
      </Row>
      <Row className="mt-5" style={{ justifyContent: "center" }}>
        <MajorScaleCard majorScale={"Bb Major Scale"} image={Bb_Major_Scale} />
      </Row>

      <Row className="mt-5 mx-auto">
        {altoSaxBbMajorScale.map((interval) => {
          return (
            <Col
              key={interval.id}
              sm="4"
              md="3"
              className="mb-4"
              onClick={() =>
                setCurrentInterval(playMajorInterval(interval))
              }
            >
              <BbMajorIntervalCard
                majorInterval={interval.title}
                image={interval.image}
              />
            </Col>
          );
        })}
      </Row>
      <Row className="mt-4">
        <h2 style={{ textAlign: "center" }}>Now it's time to test your ear!</h2>
      </Row>
      <Row className="mt-3 mx-auto">
        <Col
          sm="6"
          onClick={() => setCurrentRandomInterval(randomMajorSequence())}
        >
          <GuessIntervalCard />
        </Col>
        
        <Col sm="6" onClick={() => showAnswer()}>
          <GuessIntervalAnswerCard name={randomIntervalAnswer.title} image={randomIntervalAnswer.image}/>
        </Col>
      </Row>
    </Container>
  );
};

export default MajorScaleIntervalTrainer;

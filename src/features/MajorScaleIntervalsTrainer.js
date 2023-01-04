import { useState } from "react";
import { Row, Col, Container } from "reactstrap";
import MajorScaleCard from "./cards/MajorScaleCard";
import BbMajorIntervalCard from "./cards/BbMajorIntervalCard";
import { altoSaxBbMajorScale } from "../EARTRAINING/MajorScaleIntervals";
import Bb_Major_Scale from "../EARTRAINING/Bb_MajorScale/Bb_Major_Scale.png";

const MajorScaleIntervalTrainer = () => {
  const [currentInterval, setCurrentInterval] = useState(
    altoSaxBbMajorScale[0]
  );
  

  //function that plays an interval of the Bb major scale
  const playMajorInterval = (interval) => {
    const note1 = interval.audioFile1;
    const note2 = interval.audioFile2;
    note1.play();
    setTimeout(() => note2.play(), 1300);
  };

  return (
    <Container fixed>
      <Row>
        <h2 style={{ textAlign: "center" }}>Major Scale Interval Trainer</h2>
      </Row>
      <Row>
        <h5 style={{ textAlign: "center" }}>(Transposed for Alto Saxophone)</h5>
      </Row>
      <Row className="mt-5" style={{ justifyContent: "center" }}>
        {/* <MajorScaleCard majorScale={"Bb Major Scale"} image={Bb_Major_Scale} /> */}
      </Row>
      <Row>
        <h5 style={{ textAlign: "center" }}>(Ascending Intervals of the Bb Major Scale)</h5>
      </Row>

      <Row className="mt-3 mx-auto justify-content-center">
        {altoSaxBbMajorScale.map((interval) => {
          return (
            <Col
              key={interval.id}
              sm={{
                //offset: 1,
                size: 6
              }}
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
      
    </Container>
  );
};

export default MajorScaleIntervalTrainer;

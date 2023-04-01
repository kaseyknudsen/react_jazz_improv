import { useEffect, useState } from "react";
import { Row, Col, Container } from "reactstrap";
import BbMajorIntervalCard from "../features/cards/BbMajorIntervalCard";
import { getMajorScaleIntervalPairs } from "./MajorScaleIntervals";
import { Card, CardBody } from "reactstrap";
import { altoSaxSounds } from "./AltoSaxSounds";

const MajorScaleIntervalTrainer = () => {
  const [intervalPairs, setIntervalPairs] = useState(
    getMajorScaleIntervalPairs("alto sax")
  );
  const [instrument, setInstrument] = useState("alto sax");

  useEffect(() => {
    setIntervalPairs(getMajorScaleIntervalPairs(instrument));
  }, [instrument, setIntervalPairs]);

  const playMajorInterval = (interval) => {
    const note1 = interval.audioFile1;
    const note2 = interval.audioFile2;
    note1.play();
    setTimeout(() => note2.play(), 1300);
  };

  return (
    <Container fixed>
      <Row>
        <Col sm="3" onClick={() => setInstrument("alto sax")}>
          <Card className="card card-grow">
            <CardBody className="text-center">
              <h5>Alto Sax</h5>
            </CardBody>
          </Card>
        </Col>
        <Col sm="3" onClick={() => setInstrument("trumpet")}>
          <Card className="card card-grow">
            <CardBody className="text-center">
              <h5>Trumpet</h5>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <h2 style={{ textAlign: "center" }}>Major Scale Interval Trainer</h2>
      </Row>
      <Row className="mb-5">
        <h5 style={{ textAlign: "center" }}>(Transposed for Alto Saxophone)</h5>
      </Row>

      <Row>
        <h4 style={{ textAlign: "center" }} className="mt-4 mb-3">
          Intervals of the Bb Major Scale
        </h4>
      </Row>

      <Row className="mt-3 mx-auto justify-content-center">
        {intervalPairs.map((interval) => {
          return (
            <Col
              key={interval.id}
              sm={{
                size: 6,
              }}
              md="3"
              className="mb-4"
              onClick={() => playMajorInterval(interval)}
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

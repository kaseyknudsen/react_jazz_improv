import { useEffect, useState } from "react";
import { Row, Col, Container } from "reactstrap";
import BbMajorIntervalCard from "../features/cards/BbMajorIntervalCard";
import { getMajorScaleIntervalPairs } from "./MajorScaleIntervals";
import { Card, CardBody } from "reactstrap";

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
        <h2 style={{ textAlign: "center" }}>Major Scale Interval Trainer</h2>
      </Row>
      <Container style={{ maxWidth: 650 }}>
        <Row className="mt-4 mb-2">
          <h4 style={{ textAlign: "center" }}>Choose Your Instrument</h4>
        </Row>
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
          <Col sm="3" onClick={() => setInstrument("tenor sax")}>
            <Card className="card card-grow">
              <CardBody className="text-center">
                <h5>Tenor Sax</h5>
              </CardBody>
            </Card>
          </Col>
          <Col
            sm="3"
            onClick={() => {
              setInstrument("trombone");
              console.log("trombone clicked");
            }}
          >
            <Card className="card card-grow">
              <CardBody className="text-center">
                <h5>Trombone</h5>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      <Row>
        <h4 style={{ textAlign: "center" }} className="mt-5 mb-3">
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

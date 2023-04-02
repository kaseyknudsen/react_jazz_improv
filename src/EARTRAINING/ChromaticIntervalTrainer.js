import { chromaticIntervals } from "./ChromaticIntervals";
import ChromaticIntervalCard from "../features/cards/ChromaticIntervalCard";
import { Row, Col, Container, Card, CardBody } from "reactstrap";
import { useEffect, useState } from "react";
import { getChromaticScaleIntervalPairs } from "./ChromaticIntervals";

const ChromaticIntervalTrainer = () => {
  //function that plays chromatic intervals
  const [chromaticIntervalPairs, setChromaticIntervalPairs] = useState(
    getChromaticScaleIntervalPairs("alto sax")
  );
  const [instrument, setInstrument] = useState("alto sax");

  useEffect(() => {
    setChromaticIntervalPairs(getChromaticScaleIntervalPairs(instrument));
  }, [instrument, setChromaticIntervalPairs]);

  const playChromaticInterval = (interval) => {
    const note1 = interval.audioFile1;
    const note2 = interval.audioFile2;
    note1.play();
    setTimeout(() => note2.play(), 1300);
  };

  return (
    <Container fixed>
      <Row>
        <h2 style={{ textAlign: "center" }}>Chromatic Interval Trainer</h2>
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
      <Row className="mt-5 mx-auto justify-content-center">
        {chromaticIntervalPairs.map((interval) => {
          return (
            <Col
              key={interval.id}
              sm={{
                size: 6,
              }}
              md="3"
              className="mb-4"
              onClick={() => playChromaticInterval(interval)}
            >
              <ChromaticIntervalCard
                interval={interval.title}
                image={interval.image}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default ChromaticIntervalTrainer;

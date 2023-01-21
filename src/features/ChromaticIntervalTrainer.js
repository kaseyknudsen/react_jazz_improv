import { chromaticIntervals } from "./ChromaticIntervals";
import ChromaticIntervalCard from "./cards/ChromaticIntervalCard";
import { useState } from "react";
import { Row, Col, Container } from "reactstrap";

const ChromaticIntervalTrainer = () => {
  const [currentInterval, setCurrentInterval] = useState(chromaticIntervals[0]);

  //function that plays chromatic intervals
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
      <Row>
        <h5 style={{ textAlign: "center" }}>(Transposed for Alto Saxophone)</h5>
      </Row>
      <Row className="mt-5 mx-auto justify-content-center">
        {chromaticIntervals.map((interval) => {
          return (
            <Col
              key={interval.id}
              sm={{
                size: 6,
              }}
              md="3"
              className="mb-4"
              onClick={() =>
                setCurrentInterval(playChromaticInterval(interval))
              }
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

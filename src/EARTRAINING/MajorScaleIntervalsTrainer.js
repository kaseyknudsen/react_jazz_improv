import { Row, Col, Container } from "reactstrap";
import BbMajorIntervalCard from "../features/cards/BbMajorIntervalCard";
import { altoSaxBbMajorScale } from "./MajorScaleIntervals";
import { useState, useRef, useEffect } from "react";

const MajorScaleIntervalTrainer = () => {
  // const effectRan = useRef(false);
  // const [log, setLog] = useState(["murphy", "the dog"]);
  // useEffect(() => {
  //   if (effectRan.current) return;
  //   const addLog = (text) => setLog((log) => [...log, text]);
  //   altoSaxBbMajorScale.forEach((interval) => {
  //     interval.audioFile1.addEventListener("canplaythrough", () =>
  //       addLog(`audio file 1: ${interval.title}`)
  //     );
  //     interval.audioFile2.addEventListener("canplaythrough", () =>
  //       addLog(`audio file 2: ${interval.title}`)
  //     );
  //   });
  //   effectRan.current = true;
  // }, [setLog]);
  //function that plays an interval of the Bb major scale
  const playMajorInterval = (interval) => {
    const note1 = interval.audioFile1;
    const note2 = interval.audioFile2;
    note1.play();
    setTimeout(() => note2.play(), 1300);
  };

  return (
    <Container fixed>
      {/* <Row>
        <Col>
          {log.map((text) => (
            <p>{text}</p>
          ))}
        </Col>
      </Row> */}
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
        {altoSaxBbMajorScale.map((interval) => {
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

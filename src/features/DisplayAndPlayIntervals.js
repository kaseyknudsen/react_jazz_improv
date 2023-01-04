import IntervalCard from "./cards/IntervalCard";
import InstrumentCard from "./cards/InstrumentCard";
import { AltoSaxChromaticScaleArray } from "../EARTRAINING/altoSaxophoneChrScale";
import { TenorSaxChromaticScaleArray } from "../EARTRAINING/tenorSaxophoneChrScale";
import { trumpetChrScale } from "../EARTRAINING/trumpetChrScale";
import { tromboneChrScale } from "../EARTRAINING/tromboneChrScale";
import { useState } from "react";
import SpeedCard from "../components/SpeedCard";
import { Row, Col, Container, Card, CardBody } from "reactstrap";
import MajorScaleIntervalTrainer from "./MajorScaleIntervalsTrainer";
import RandomMajorIntervals from "./RandomMajorIntervals";

const DisplayAndPlayIntervalsRefactor = () => {
  const [currentSequence, setCurrentSequence] = useState([]);
  const [currentDelay, setDelay] = useState(1300);
  const [currentInstrumentArray, setCurrentInstrumentArray] = useState(
    AltoSaxChromaticScaleArray
  );

  //function that generates random numbers that will correspond to the indices of the instrument array
  const randomSequence = (noteCount, noteArray) => {
    const sequence = [];
    for (let i = 0; i < noteCount; i++) {
      const note = Math.floor(Math.random() * noteArray.length);
      sequence.push(note);
    }
    return sequence;
  };
  const slow = 1800;
  const medium = 1300;
  const fast = 1000;

  //function that plays the set of random indices of the instrument array
  const playSequence = (notes, noteArray) => {
    for (let i = 0; i < notes.length; i++) {
      const note = notes[i];
      const audioFile = noteArray[note].audio_file;
      console.log(audioFile);
      const delay = currentDelay * i;
      setTimeout(() => audioFile.play(), delay);
    }
  };

  const onNewSequenceClick = (notes, instrumentArray) => {
    const newSequence = randomSequence(notes, currentInstrumentArray);
    setCurrentSequence(newSequence);
    playSequence(newSequence, instrumentArray);
  };

  const noteCounts = [1, 2, 3, 4, 5];

  return (
    <>
      <div className="row-style">
        <MajorScaleIntervalTrainer />
        <RandomMajorIntervals />
      </div>

      <div>
        <h2 className="text-center mb-5">Random Note Sequence Ear Trainer</h2>
      </div>

      <Container style={{ maxWidth: 650 }}>
        <h2 style={{ textAlign: "center" }}>Choose Your Tempo</h2>
        <Row className="mb-5">
          <Col onClick={() => setDelay(slow)}>
            <SpeedCard speed="Slow" />
          </Col>
          <Col onClick={() => setDelay(medium)}>
            <SpeedCard speed="Medium" />
          </Col>
          <Col onClick={() => setDelay(fast)}>
            <SpeedCard speed="Fast" />
          </Col>
        </Row>
      </Container>

      <Container style={{ maxWidth: 700 }}>
        <h2 style={{ textAlign: "center" }}>Choose Your Instrument</h2>

        <Row className="mb-5">
          <Col
            xs="6"
            md="3"
            className="mb-3"
            onClick={() =>
              setCurrentInstrumentArray(AltoSaxChromaticScaleArray)
            }
          >
            <InstrumentCard instrument={"Alto Saxophone"} />
          </Col>
          <Col
            xs="6"
            md="3"
            className="mb-3"
            onClick={() =>
              setCurrentInstrumentArray(TenorSaxChromaticScaleArray)
            }
          >
            <InstrumentCard instrument={"Tenor Saxophone"} />
          </Col>
          <Col
            xs="6"
            md="3"
            className="mb-3"
            onClick={() => setCurrentInstrumentArray(trumpetChrScale)}
          >
            <InstrumentCard instrument={"Trumpet"} />
          </Col>

          <Col
            onClick={() => setCurrentInstrumentArray(tromboneChrScale)}
            xs="6"
            md="3"
            className="mb-3"
          >
            <InstrumentCard instrument={"Trombone"} />
          </Col>
        </Row>
      </Container>
      <Container style={{ maxWidth: 400}}>
        <h2 style={{ textAlign: "center" }}>
          Choose Your Note Sequence Length
        </h2>
        <Row className="justify-content-center">
          {noteCounts.map((noteCount) => {
            return (
              <Col
                sm="6"
               
                className="mb-3"
                onClick={() =>
                  onNewSequenceClick(noteCount, currentInstrumentArray)
                }
              >
                {noteCount === 1 ? (
                  <IntervalCard name={`Play ${noteCount} Note`} />
                ) : (
                  <IntervalCard name={`Play ${noteCount} Notes`} />
                )}
              </Col>
            );
          })}
        </Row>
      </Container>
      <Container>
        <Row>
          <Col
            onClick={() =>
              playSequence(currentSequence, currentInstrumentArray)
            }
          >
            <Card className="card card-grow w-25 mx-auto mt-3">
              <CardBody className="text-center">
                <h4>Replay Sequence</h4>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default DisplayAndPlayIntervalsRefactor;

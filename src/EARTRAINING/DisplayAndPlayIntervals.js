import IntervalCard from "../features/cards/IntervalCard";
import InstrumentCard from "../features/cards/InstrumentCard";
import { AltoSaxChromaticScaleArray } from "./altoSaxophoneChrScale";
import { TenorSaxChromaticScaleArray } from "./tenorSaxophoneChrScale";
import { trumpetChrScale } from "./trumpetChrScale";
import { tromboneChrScale } from "./tromboneChrScale";
import { useState } from "react";
import SpeedCard from "../features/cards/SpeedCard";
import {
  Row,
  Col,
  Container,
  Card,
  CardBody,
  CardImg,
  CardText,
} from "reactstrap";
import MajorScaleIntervalTrainer from "./MajorScaleIntervalsTrainer";
import RandomMajorIntervals from "../features/RandomMajorIntervals";
import ChromaticIntervalTrainer from "./ChromaticIntervalTrainer";
import RandomChromaticIntervals from "./RandomChromaticIntervals";

//function that generates random numbers that will correspond to the indices of the instrument array
//it will return somewhere between 1 & 5 random numbers, depending on the chosen note sequence
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

const DisplayAndPlayIntervalsRefactor = () => {
  const [currentSequence, setCurrentSequence] = useState([]);
  const [currentDelay, setDelay] = useState(1300);
  const [currentInstrumentArray, setCurrentInstrumentArray] = useState(
    AltoSaxChromaticScaleArray
  );
  const [showAnswer, setShowAnswer] = useState(false);
  const [showIntervalCards, setShowIntervalCards] = useState(false);

  //function that plays the set of random indices of the instrument array
  const playSequence = (notes, noteArray) => {
    for (let i = 0; i < notes.length; i++) {
      const note = notes[i];
      const audioFile = noteArray[note].audio_file;
      const delay = currentDelay * i;
      setTimeout(() => audioFile.play(), delay);
    }
  };

  const answerCard = () => {
    
    return (
      <Col>
        <Card className="card card-grow w-50 mx-auto mt-5 text-center">
          <CardBody>
            <CardText>Ready to see the answer?</CardText>
          </CardBody>
        </Card>
      </Col>
    );
  };

  const displayIntervalCards = () => {
    return (
      <Row>
        {currentSequence.map((note) => {
          return (
            <Col className="mt-5">
              <Card className="card card-grow" style={{maxWidth: 200}}>
                <CardImg
                  src={currentInstrumentArray[note].image}
                  width="100%"
                />
                <CardBody className="card-body text-center">
                  <p className="card-text">
                    {currentInstrumentArray[note].name}
                  </p>
                </CardBody>
              </Card>
            </Col>
          );
        })}
      </Row>
    );
  };

  const onNewSequenceClick = (notes, instrumentArray) => {
    const newSequence = randomSequence(notes, currentInstrumentArray);
    setCurrentSequence(newSequence);
    playSequence(newSequence, instrumentArray);
    setShowAnswer(true);
    setShowIntervalCards(null)
    return newSequence;
  };

  const noteCounts = [1, 2, 3, 4, 5];

  return (
    <>
      <div className="row-style">
        <MajorScaleIntervalTrainer />

        <RandomMajorIntervals />
      </div>
      <div className="row-style">
        <ChromaticIntervalTrainer />
        <RandomChromaticIntervals />
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
      <Container style={{ maxWidth: 400 }}>
        <h2 style={{ textAlign: "center" }}>
          Choose Your Note Sequence Length
        </h2>
        <Row className="justify-content-center">
          {noteCounts.map((noteCount) => {
            return (
              <Col
                sm="6"
                className="mb-3"
                onClick={() => {
                  onNewSequenceClick(noteCount, currentInstrumentArray);
                }}
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

      <Container style={{ maxWidth: 650 }}>
        <Row>
          <Col
            onClick={() => {
              playSequence(currentSequence, currentInstrumentArray);
            }}
          >
            <Card className="card card-grow w-25 mx-auto mt-4">
              <CardBody className="text-center">
                <h4>Replay Sequence</h4>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col onClick={() => setShowIntervalCards(true)}>
            {showAnswer ? answerCard() : null}
          </Col>
        </Row>
        <Row>
          <Col>{showIntervalCards ? displayIntervalCards() : null}</Col>
        </Row>
      </Container>
    </>
  );
};

export default DisplayAndPlayIntervalsRefactor;

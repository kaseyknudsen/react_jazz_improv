import IntervalCard from "./IntervalCard";
import { Col, Row, Card, CardBody, CardImg } from "reactstrap";
import { getRandomNote } from "./RandomNoteSlice";
import saxophone from "../EARTRAINING/instrument_images/saxophone.png";
import trumpet from "../EARTRAINING/instrument_images/trumpet.png";
import { AltoSaxChromaticScaleArray } from "../EARTRAINING/altoSaxophoneChrScale";
import { trumpetChrScale } from "../EARTRAINING/trumpetChrScale";
import { useState } from "react";

const DisplayAndPlayIntervals = () => {
  const [currentSequence, setCurrentSequence] = useState([]);
  const [currentInstrumentArray, setCurrentInstrumentArray] = useState(
    AltoSaxChromaticScaleArray
  );

  const randomSequence = (noteCount, noteArray) => {
    const sequence = [];
    for (let i = 0; i < noteCount; i++) {
      const note = Math.floor(Math.random() * noteArray.length);
      sequence.push(note);
    }
    return sequence;
  };

  const playSequence = (notes, noteArray) => {
    for (let i = 0; i < notes.length; i++) {
      const note = notes[i];
      const audioFile = noteArray[note].audio_file;
      console.log(audioFile);
      const delay = 1200 * i;
      setTimeout(() => audioFile.play(), delay);
    }
  };

  const onNewSequenceClick = (noteCount, instrumentArray) => {
    const newSequence = randomSequence(noteCount, instrumentArray);
    setCurrentSequence(newSequence);
    setCurrentInstrumentArray(instrumentArray);
    playSequence(newSequence, instrumentArray);
  };

  const noteCounts = [1, 2, 3, 4, 5];

  return (
    <>
      <Row>
        <h1 className="text-center mb-3" style={{ fontSize: "3em" }}>
          Choose Your Instrument
        </h1>
      </Row>
      <Row className="row-style">
        <Col sm="4" lg="3" className="mx-auto mb-3">
          <a href="#altoSax">
            <Card>
              <CardBody>
                <CardImg src={saxophone} />
              </CardBody>
            </Card>
          </a>
        </Col>
        <Col sm="4" lg="3" className="mx-auto">
          <a href="#trumpet">
            <Card>
              <CardBody>
                <CardImg src={trumpet} />
              </CardBody>
            </Card>
          </a>
        </Col>
      </Row>
      <Row id="altoSax">
        <Col>
          <h1 className="text-center mb-5" style={{ fontSize: "3em" }}>
            Alto Saxophone
          </h1>
        </Col>
        <Col sm="12">
          <h2 className="text-center mb-2">Choose A Note Sequence Length</h2>
        </Col>
        <Col sm="12">
          <h5 className="text-center">Try to Repeat Back What You Hear!</h5>
        </Col>
      </Row>
      <Row className="row-style">
        {noteCounts.map((noteCount) => {
          return (
            <Col
              sm="7"
              md="6"
              lg="3"
              className="mt-3 mx-auto"
              onClick={() =>
                onNewSequenceClick(noteCount, AltoSaxChromaticScaleArray)
              }
            >
              <IntervalCard name={`Play ${noteCount} Notes`} />
            </Col>
          );
        })}
        <Row className="mt-3">
          <Col
            sm="5"
            className="mx-auto"
            onClick={() =>
              playSequence(currentSequence, currentInstrumentArray)
            }
          >
            <IntervalCard name="replay" />
          </Col>
        </Row>
      </Row>
      <Row id="trumpet">
        <Col sm="12">
          <h1 className="text-center mb-5" style={{ fontSize: "3em" }}>
            Trumpet
          </h1>
        </Col>
        <Col sm="12">
          <h2 className="text-center mb-2">Choose A Note Sequence Length</h2>
        </Col>
        <Col sm="12">
          <h5 className="text-center">Try to Repeat Back What You Hear!</h5>
        </Col>
      </Row>
      <Row className="row-style">
        {noteCounts.map((noteCount) => {
          return (
            <Col
              sm="7"
              md="6"
              lg="3"
              className="mt-3 mx-auto"
              onClick={() => onNewSequenceClick(noteCount, trumpetChrScale)}
            >
              <IntervalCard name={`Play ${noteCount} Notes`} />
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default DisplayAndPlayIntervals;

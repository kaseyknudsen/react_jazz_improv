import IntervalCard from "./IntervalCard";
import { Col, Row, Card, CardBody, CardImg } from "reactstrap";
import { getRandomNote } from "./RandomNoteSlice";
import saxophone from "../EARTRAINING/instrument_images/saxophone.png";
import trumpet from "../EARTRAINING/instrument_images/trumpet.png";
import { AltoSaxChromaticScaleArray } from "../EARTRAINING/altoSaxophoneChrScale";
import { trumpetChrScale } from "../EARTRAINING/trumpetChrScale";
import { Link } from "react-router-dom";

const DisplayAndPlayIntervals = () => {
  const playSequenceOnClick = (noteCount, noteArray) => {
    for (let i = 0; i < noteCount; i++) {
      const audioFile = getRandomNote(noteArray).audio_file;
      console.log(audioFile);
      const delay = 1200 * i;
      setTimeout(() => audioFile.play(), delay);
    }
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
          <h2 className="text-center mb-2">Choose A Note Length</h2>
        </Col>
        <Col sm="12">
          <h5 className="text-center">Try to Repeat Back What You Hear!</h5>
        </Col>
      </Row>
      <Row className="row-style">
        {noteCounts.map((noteCount) => {
          if (noteCount > 1) {
            return (
              <Col
                sm="7"
                md="6"
                lg="3"
                className="mt-3 mx-auto"
                onClick={() =>
                  playSequenceOnClick(noteCount, AltoSaxChromaticScaleArray)
                }
              >
                <IntervalCard name={`Play ${noteCount} Notes`} />
              </Col>
            );
          } else {
            return (
              <Col
                sm="7"
                md="6"
                lg="3"
                className="mt-3 mx-auto"
                onClick={() => playSequenceOnClick(noteCount)}
              >
                <IntervalCard name={`Play ${noteCount} Note`} />
              </Col>
            );
          }
        })}
      </Row>
      <Row id="trumpet">
        <Col sm="12">
          <h1 className="text-center mb-5" style={{ fontSize: "3em" }}>
            Trumpet
          </h1>
        </Col>
        <Col sm="12">
          <h2 className="text-center mb-2">Choose A Note Length</h2>
        </Col>
        <Col sm="12">
          <h5 className="text-center">Try to Repeat Back What You Hear!</h5>
        </Col>
      </Row>
      <Row className="row-style">
        {noteCounts.map((noteCount) => {
          if (noteCount > 1) {
            return (
              <Col
                sm="7"
                md="6"
                lg="3"
                className="mt-3 mx-auto"
                onClick={() => playSequenceOnClick(noteCount, trumpetChrScale)}
              >
                <IntervalCard name={`Play ${noteCount} Notes`} />
              </Col>
            );
          } else {
            return (
              <Col
                sm="7"
                md="6"
                lg="3"
                className="mt-3 mx-auto"
                onClick={() => playSequenceOnClick(noteCount)}
              >
                <IntervalCard name={`Play ${noteCount} Note`} />
              </Col>
            );
          }
        })}
      </Row>
    </>
  );
};

export default DisplayAndPlayIntervals;

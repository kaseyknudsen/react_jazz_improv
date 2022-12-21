import IntervalCard from "./cards/IntervalCard";
import { AltoSaxChromaticScaleArray } from "../EARTRAINING/altoSaxophoneChrScale";
import { TenorSaxChromaticScaleArray } from "../EARTRAINING/tenorSaxophoneChrScale";
import { trumpetChrScale } from "../EARTRAINING/trumpetChrScale";
import { tromboneChrScale } from "../EARTRAINING/tromboneChrScale";
import { useState } from "react";
import SpeedCard from "../components/SpeedCard";
import { Row, Col, Container } from "reactstrap";
import MajorScaleCard from "./cards/MajorScaleCard";
import BbMajorIntervalCard from "./cards/BbMajorIntervalCard";
import GuessIntervalCard from "./cards/GuessIntervalCard";
import GuessIntervalAnswerCard from "./cards/GuessIntervalAnswerCard";
import { altoSaxBbMajorScale } from "../EARTRAINING/MajorScaleIntervals";
import Bb_Major_Scale from "../EARTRAINING/Bb_MajorScale/Bb_Major_Scale.png";

const DisplayAndPlayIntervalsRefactor = () => {
  const [currentSequence, setCurrentSequence] = useState([]);
  const [currentDelay, setDelay] = useState(1300);
  const [currentInstrumentArray, setCurrentInstrumentArray] = useState(
    AltoSaxChromaticScaleArray
  );
  const [currentMajorInterval, setCurrentMajorInterval] = useState(
    altoSaxBbMajorScale[0].audioFile1
  );
  const [currentRandomMajorInterval, setCurrentRandomMajorInterval] = useState(altoSaxBbMajorScale[0].audioFile1)

  

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

  //function that plays an interval of the Bb major scale
  const playMajorInterval = (interval) => {
    const note1 = interval.audioFile1
    const note2 = interval.audioFile2
    const delay = 1300;
    note1.play()
    setTimeout(() => note2.play(), delay)
  }

  //function that plays a random sequence from the Bb major scale
  const randomMajorSequence = () => {
    const intervalIndex = Math.floor(Math.random() * altoSaxBbMajorScale.length)
    const randomMajInterval = altoSaxBbMajorScale[intervalIndex]
    playMajorInterval(randomMajInterval)
  }


  return (
    <>
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

      <div className="big-grid row-style">
        <div className="ear-training-grid ">
          <div
            className="grid-item"
            onClick={() =>
              setCurrentInstrumentArray(AltoSaxChromaticScaleArray)
            }
          >
            <IntervalCard name="Alto Saxophone" />
          </div>
          <div
            className="grid-item"
            onClick={() =>
              setCurrentInstrumentArray(TenorSaxChromaticScaleArray)
            }
          >
            <IntervalCard name="Tenor Saxophone" />
          </div>
          <div
            className="grid-item"
            onClick={() => setCurrentInstrumentArray(trumpetChrScale)}
          >
            <IntervalCard name="Trumpet" />
          </div>
          {/* <div className="grid-item">
            <IntervalCard name="Bass" />
          </div> */}
          <div
            className="grid-item"
            onClick={() => setCurrentInstrumentArray(tromboneChrScale)}
          >
            <IntervalCard name="Trombone" />
          </div>

          {/* <div className="grid-item">
            <IntervalCard name="Piano" />
          </div> */}
        </div>

        <div className="sequence-grid">
          {noteCounts.map((noteCount) => {
            return (
              <div
                className="sequence-grid-item"
                onClick={() =>
                  onNewSequenceClick(noteCount, currentInstrumentArray)
                }
              >
                {noteCount === 1 ? (
                  <IntervalCard name={`Play ${noteCount} Note`} />
                ) : (
                  <IntervalCard name={`Play ${noteCount} Notes`} />
                )}
              </div>
            );
          })}
          <div
            className="sequence-grid-item"
            onClick={() =>
              playSequence(currentSequence, currentInstrumentArray)
            }
          >
            <IntervalCard name="Replay Sequence" />
          </div>
        </div>
      </div>
      <Container style={{ maxWidth: 750 }}>
        <Row>
        <h2 style={{ textAlign: "center" }}>Major Scale Interval Trainer</h2>
        </Row>
        <Row>
        <h5 style={{ textAlign: "center" }}>(Transposed for Alto Saxophone)</h5>
        </Row>
        <Row className="mt-5">
          <MajorScaleCard
            majorScale={"Bb Major Scale"}
            image={Bb_Major_Scale}
          />
        </Row>

        <Row className="mt-5 mx-auto">
          {altoSaxBbMajorScale.map((interval) => {
            return (
              <Col sm="4" md="3" className="mb-4" onClick={() => setCurrentMajorInterval(playMajorInterval(interval))}>
                <BbMajorIntervalCard
                  majorInterval={interval.title}
                  image={interval.image}
                />
              </Col>
            );
          })}
        </Row>
        <Row className="mt-4">
        <h2 style={{ textAlign: "center" }}>Now it's time to test your ear!</h2>
        </Row>
        <Row className="mt-3 mx-auto">
          <Col sm="6" onClick={() => setCurrentRandomMajorInterval(randomMajorSequence())}>
          <GuessIntervalCard />
          </Col>
          <Col sm="6">
          <GuessIntervalAnswerCard />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default DisplayAndPlayIntervalsRefactor;

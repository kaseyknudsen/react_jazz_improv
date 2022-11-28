import IntervalCard from "./IntervalCard";
import { AltoSaxChromaticScaleArray } from "../EARTRAINING/altoSaxophoneChrScale";
import { trumpetChrScale } from "../EARTRAINING/trumpetChrScale";
import { useState } from "react";

const DisplayAndPlayIntervalsRefactor = () => {
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

  const setInstrument = (instrumentArray) => {
    setCurrentInstrumentArray(instrumentArray)
    console.log(currentInstrumentArray)
  }

  const onNewSequenceClick = (notes, instrumentArray) => {
    const newSequence = randomSequence(notes);
    setCurrentSequence(newSequence);
    playSequence(newSequence, instrumentArray);
  };

  const noteCounts = [1, 2, 3, 4, 5];

  return (
    <>
      <div>
        <h2 className="text-center mb-5">Random Note Sequence Ear Trainer</h2>
      </div>

      <div className="big-grid">
        <div className="ear-training-grid ">
          <div className="grid-item"
          onClick={() => setInstrument(AltoSaxChromaticScaleArray)}>
            <IntervalCard name="Alto Saxophone" />
          </div>
          <div className="grid-item"
          onClick={() => setInstrument(trumpetChrScale)}>
            <IntervalCard name="Trumpet" />
          </div>
          <div className="grid-item">
            <IntervalCard name="Bass" />
          </div>
          <div className="grid-item">
            <IntervalCard name="Trombone" />
          </div>
          <div className="grid-item">
            <IntervalCard name="Tenor Saxophone" />
          </div>
          <div className="grid-item">
            <IntervalCard name="Piano" />
          </div>
        </div>

        <div className="sequence-grid">
          {noteCounts.map((noteCount) => {
            return (
              <div
                onClick={() => onNewSequenceClick(noteCount, currentInstrumentArray) }
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
            onClick={() =>
              playSequence(currentSequence, currentInstrumentArray)
            }
          >
            <IntervalCard name="replay" />
          </div>
        </div>
      </div>

      {/* <Row className="row-style">
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
            ></Col>
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
      </Row> */}
    </>
  );
};

export default DisplayAndPlayIntervalsRefactor;

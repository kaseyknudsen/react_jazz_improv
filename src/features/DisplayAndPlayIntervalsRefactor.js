import IntervalCard from "./IntervalCard";
import { AltoSaxChromaticScaleArray } from "../EARTRAINING/altoSaxophoneChrScale";
import { trumpetChrScale } from "../EARTRAINING/trumpetChrScale";
import { useState } from "react";

const DisplayAndPlayIntervalsRefactor = () => {
  const [currentSequence, setCurrentSequence] = useState([]);
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

  //function that plays the set of random indices of the instrument array
  const playSequence = (notes, noteArray) => {
    for (let i = 0; i < notes.length; i++) {
      const note = notes[i];
      const audioFile = noteArray[note].audio_file;
      console.log(audioFile);
      const delay = 1200 * i;
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
      <div>
        <h2 className="text-center mb-5">Random Note Sequence Ear Trainer</h2>
      </div>

      <div className="big-grid">
        <div className="ear-training-grid ">
          <div className="grid-item"
          onClick={() => setCurrentInstrumentArray(AltoSaxChromaticScaleArray)}>
            <IntervalCard name="Alto Saxophone" />
          </div>
          <div className="grid-item"
          onClick={() => setCurrentInstrumentArray(trumpetChrScale)}>
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
    </>
  );
};

export default DisplayAndPlayIntervalsRefactor;

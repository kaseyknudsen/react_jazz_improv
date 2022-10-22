import IntervalCard from "./IntervalCard";
import { Col, Row } from "reactstrap";
import { getRandomNote } from "./RandomNoteSlice";

const DisplayAndPlayIntervals = () => {
  const playSequenceOnClick = (noteCount) => {
    for (let i = 0; i < noteCount; i++) {
      const audioFile = getRandomNote().audio_file;
      const delay = 1000 * i;
      setTimeout(() => audioFile.play(), delay);
    }
  };

  const noteCounts = [1, 2, 3, 4, 5];

  return (
    <>
      <h1 className="text-center mb-2">Choose A Note Length</h1>
      <h5 className="text-center mb-5">Try to Repeat Back What You Hear!</h5>
      <Row>
        {noteCounts.map((noteCount) => {
          if (noteCount > 1) {
            return (
              <Col
                sm="7"
                md="6"
                lg="3"
                className="mt-3 mx-auto"
                onClick={() => playSequenceOnClick(noteCount)}
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

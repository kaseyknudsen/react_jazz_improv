import TheoryCard from "./TheoryCard";
import { modeSlice } from "./questionsSlice";
import { intervalSlice } from "./questionsSlice";
import { chordSlice } from "./questionsSlice";
import { keySignatureSlice } from "./questionsSlice";
import { Col, Row } from 'reactstrap';

export const DisplayModeQuestion = () => {
    const mode = modeSlice();
    return (
        <Row>
            <Col sm="4" className="mx-auto card-grow mt-5">
                <TheoryCard title={mode.title} question={mode.question}/>
            </Col>
        </Row>
    )
};

export const DisplayIntervalQuestion = () => {
    const interval = intervalSlice();
    return (
        <Row>
            <Col sm="4" className="mx-auto card-grow mt-5">
                <TheoryCard title={interval.title} question={interval.question}/>
            </Col>
        </Row>
    );
};

export const DisplayKeySignatureQuestion = () => {
    const keySignature = keySignatureSlice();
    return (
        <Row>
            <Col sm='4' className="mx-auto card-grow mt-5">
                <TheoryCard title={keySignature.title} question={keySignature.question} />
            </Col>
        </Row>
    )
}

export const DisplayChordQuestion = () => {
    const chord = chordSlice();
    return (
        <Row>
            <Col sm='4' className="mx-auto card-grow mt-5">
                <TheoryCard title={chord.title} question={chord.question}/>
            </Col>
        </Row>
    )
}




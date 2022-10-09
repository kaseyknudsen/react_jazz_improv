import { DisplayModeQuestion } from "../features/DisplayTheoryQuestions";
import { DisplayIntervalQuestion } from "../features/DisplayTheoryQuestions";
import { DisplayKeySignatureQuestion } from "../features/DisplayTheoryQuestions";
import { DisplayChordQuestion } from "../features/DisplayTheoryQuestions";
import { Col, Row } from "reactstrap";

const TheoryPage = () => {
    return (
        <div>
            <DisplayModeQuestion />
            <DisplayIntervalQuestion />
            <DisplayKeySignatureQuestion />
            <DisplayChordQuestion />
        </div>
    
    );
};

export default TheoryPage;


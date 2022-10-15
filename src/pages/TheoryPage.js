import { DisplayModeQuestion } from "../features/DisplayTheoryQuestions";
import { DisplayIntervalQuestion } from "../features/DisplayTheoryQuestions";
import { DisplayKeySignatureQuestion } from "../features/DisplayTheoryQuestions";
import { DisplayChordQuestion } from "../features/DisplayTheoryQuestions";
import { Col, Row } from "reactstrap";
import Header from "../components/Header";

const TheoryPage = () => {
    return (
        <div>
            <Header />
            <DisplayModeQuestion />
            <DisplayIntervalQuestion />
            <DisplayKeySignatureQuestion />
            <DisplayChordQuestion />
        </div>
    
    );
};

export default TheoryPage;


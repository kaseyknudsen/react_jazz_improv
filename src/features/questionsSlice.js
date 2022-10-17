import { ModeQuestions } from "../QUESTIONS/TheoryQuestions";
import { KeySignatureQuestions } from "../QUESTIONS/TheoryQuestions";
import { ChordQuestions } from "../QUESTIONS/TheoryQuestions";
import { IntervalQuestions } from "../QUESTIONS/TheoryQuestions";

export const modeSlice = () => {
    const randomModeQuestion = ModeQuestions[Math.floor(Math.random() * ModeQuestions.length)];
    return (
        randomModeQuestion
    );
};

export const keySignatureSlice = () => {
    const randomKeySigQuestion = KeySignatureQuestions[Math.floor(Math.random() * KeySignatureQuestions.length)];
    return (
        randomKeySigQuestion
    );
};

export const intervalSlice = () => {
    const randomIntervalQuestion = IntervalQuestions[Math.floor(Math.random() * IntervalQuestions.length)];
    return (
        randomIntervalQuestion
    );
};

export const chordSlice = () => {
    const randomChordQuestion = ChordQuestions[Math.floor(Math.random() * ChordQuestions.length)];
    return (
        randomChordQuestion
    );
};
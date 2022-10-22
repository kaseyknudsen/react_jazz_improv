import aMajor from '../app/images/key-signatures/A-maj-key-sig.png';
import dbMajor from '../app/images/key-signatures/Db-maj-70x55.png';
import c7Dominant from '../app/images/chords/c7Dominant.png';
import ebMajChord from '../app/images/chords/EbMajChord.png';
import maj3rd from '../app/images/intervals/major-3rd.png';
import min7th from '../app/images/intervals/minor-7th.png';
import ionian from '../app/images/mode_pics/ionian.png';
import dorian from '../app/images/mode_pics/dorian.png';
import phrygian from '../app/images/mode_pics/phrygian.png';
import lydian from '../app/images/mode_pics/lydian.png';
import mixolydian from '../app/images/mode_pics/mixolydian.png';
import aeolian from '../app/images/mode_pics/aeolian.png';
import locrian from '../app/images/mode_pics/locrian.png';

export const ModeQuestions = [
    {
        id: 0,
        image: dorian,
        title: 'Modes',
        question: 'What is the 2nd mode of the major scale?',
        answer: 'Dorian'
    },
    {
        id: 1,
        image: lydian,
        title: 'Modes',
        question: 'What is the 4th mode of the major scale?',
        answer: 'Lydian'
    },
    {
        id: 3,
        image: aeolian,
        title: 'Modes',
        question: 'What is the 6th mode of the major scale?',
        answer: 'Aeolian'
    },
    {
        id: 4,
        image: phrygian,
        title: 'Modes',
        question: 'What is the 3rd mode of the major scale?',
        answer: 'Phrygian'
    },
    {
        id: 5,
        image: mixolydian,
        title: 'Modes',
        question: 'What is the 5th mode of the major scale?',
        answer: 'Mixolydian'
    },
    {
        id: 6,
        image: ionian,
        title: 'Modes',
        question: 'What is the 1st mode of the major scale?',
        answer: 'Ionian'
    },
    {
        id: 7,
        image: locrian,
        title: 'Modes',
        question: 'What is the 7th mode of the major scale?',
        answer: 'Locrian'
    }
]

export const KeySignatureQuestions = [
    {
        id: 0,
        title: 'Key Signatures',
        image: aMajor,
        question: 'What is this major Key Signature?',
        answer: 'A Major'
    },
    {
        id: 1,
        title: 'Key Signatures',
        image: dbMajor,
        question: 'What is this major Key Signature?',
        answer: 'Db Major'
    }
]

export const ChordQuestions = [
    {
        id: 0,
        title: 'Chords',
        image: c7Dominant,
        question: 'What chord is this?',
        answer: 'C7 Dominant'
    },
    {
        id: 1,
        title: 'Chords',
        image: ebMajChord,
        question: 'What chord is this?',
        answer: 'Eb Major'
    }
]

export const IntervalQuestions = [
    {
        id: 0,
        title: 'Intervals',
        image: maj3rd,
        question: 'What Interval is this?',
        answer: 'Major 3rd'
    },
    {
        id: 1,
        title: 'Intervals',
        image: min7th,
        question: 'What interval is this?',
        answer: 'Minor 7th'
    }
]
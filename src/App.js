import './index.css';
import { DisplayModeQuestion } from './features/DisplayTheoryQuestions';
import HomePage from './pages/HomePage';
import { Routes, Route } from 'react-router-dom';
import TheoryPage from './pages/TheoryPage';
import EarTrainingPage from './pages/EarTrainingPage';
import RepertoirePage from './pages/RepertoirePage';
import PracticeRoutinesPage from './pages/PracticeRoutinesPage';
import ContactMePage from './pages/ContactMe';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='theory_page' element={<TheoryPage />} />
        <Route path='ear_training' element={<EarTrainingPage />} />
        <Route path='repertoire_page' element={<RepertoirePage />} />
        <Route path='practice_routines' element={<PracticeRoutinesPage />} />
        <Route path='contact_me' element={<ContactMePage />} />
      </Routes>
    </div>
  );
};

export default App;

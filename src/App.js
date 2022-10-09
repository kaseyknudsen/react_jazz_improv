import './App.css';
import { DisplayModeQuestion } from './features/DisplayTheoryQuestions';
import HomePage from './pages/HomePage';
import { Routes, Route } from 'react-router-dom';
import TheoryPage from './pages/TheoryPage';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='theoryPage' element={<TheoryPage />} />
      </Routes>
    </div>
  );
}

export default App;

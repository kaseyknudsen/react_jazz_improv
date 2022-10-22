import "./index.css";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import TheoryPage from "./pages/TheoryPage";
import EarTrainingPage from "./pages/EarTrainingPage";
import RepertoirePage from "./pages/RepertoirePage";
import PracticeRoutinesPage from "./pages/PracticeRoutinesPage";
import ContactMePage from "./pages/ContactMePage";


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="theory_page" element={<TheoryPage />} />
        <Route path="ear_training" element={<EarTrainingPage />} />
        <Route path="repertoire_page" element={<RepertoirePage />} />
        <Route path="practice_routines" element={<PracticeRoutinesPage />} />
        <Route path="contact_me" element={<ContactMePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

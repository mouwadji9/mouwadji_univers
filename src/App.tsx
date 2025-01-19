import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Presentation from './pages/Presentation';
import Citations from './pages/Citations';
import Poemes from './pages/Poemes';
import PhotosAventures from './pages/PhotosAventures';
import PersonnagesIdoles from './pages/PersonnagesIdoles';
import Psychologie from './pages/Psychologie';

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<Presentation />} />
          <Route path="/citations" element={<Citations />} />
          <Route path="/poemes" element={<Poemes />} />
          <Route path="/photos-aventures" element={<PhotosAventures />} />
          <Route path="/personnages-idoles" element={<PersonnagesIdoles />} />
          <Route path="/psychologie" element={<Psychologie />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
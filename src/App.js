import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home';
import Psychologie from './components/Pages/Psychologie';
import Quisuisje from './components/Pages/Quisuisje';
import Contact from './components/Pages/Contact';
import Navbar from './components/Navigation/Navbar';
import "./App.scss"
import Mainview from './components/Mainviews/Mainview';

function App() {

  return (
    <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/psychologie" element={<Psychologie />} />
          <Route path="/qui-suis-je" element={<Quisuisje />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
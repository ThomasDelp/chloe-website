import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home';
import Psychologie from './components/Pages/Psychologie';
import Quisuisje from './components/Pages/Quisuisje';
import Contact from './components/Pages/Contact';
import Navbar from './components/Navigation/Navbar';

import "./App.scss"

function App() {

  return (
    <Router basename={process.env.PUBLIC_URL}>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/psychologie" element={<Psychologie />} />
          <Route path="/qui-suis-je" element={<Quisuisje />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </Router>
  );
}

export default App;
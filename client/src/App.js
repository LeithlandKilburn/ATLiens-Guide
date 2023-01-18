import { useState, useEffect } from 'react';
import { Routes, Route, Link, Router } from 'react-router-dom';
import Home from './components/Home.js';
import Navbar from './components/Nav.js';
import './index.css';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

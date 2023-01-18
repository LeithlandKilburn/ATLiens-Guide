import { useState, useEffect } from 'react';
import { Routes, Route, Link, Router } from 'react-router-dom';
import Home from './components/Home.js';
import Navbar from './components/Nav.js';
import './index.css';
import Login from './components/Login.js';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;

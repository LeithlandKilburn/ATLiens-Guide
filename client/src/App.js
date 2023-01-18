import { useState, useEffect } from 'react';
import { Routes, Route, Link, Router } from 'react-router-dom';
import HomePage from './components/Home.js';
import './index.css';
import Login from './components/Login.js';
import { Sidebar } from 'react-pro-sidebar';
import Navbar from './components/Navbar.js';

function App() {
  return (
    <div className="App">
      <div className="navbar-container">
        <Sidebar>
          <Navbar />
        </Sidebar>
        <div className="routes-container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;

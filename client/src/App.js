import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/Home.js';
import SearchResultPage from './components/SearchResultPage.js';
import EditWordForm from './components/EditWordForm.js';

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
            <Route path="/search" element={<SearchResultPage />} />
            <Route path="/edit/:wordId" element={<EditWordForm />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;

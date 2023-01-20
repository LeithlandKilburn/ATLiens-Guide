import { useState, useEffect } from 'react';
import { Routes, Route, Link, Router } from 'react-router-dom';
import HomePage from './components/Home.js';
import SearchResultPage from './components/SearchResultPage.js';
import EditWordForm from './components/EditWordForm.js';
import AuthContext from './contexts/AuthContext';

import './index.css';
import Login from './components/Login.js';
import { Sidebar } from 'react-pro-sidebar';
import Navbar from './components/Navbar.js';

function App() {
  const [wordData, setWordData] = useState([]);

  return (
    <div className="App">
      <div className="navbar-container">
        <Sidebar>
          <Navbar />
        </Sidebar>
        <div className="routes-container">
          <Routes>
            <Route
              path="/"
              element={
                <HomePage wordData={wordData} setWordData={setWordData} />
              }
            />
            <Route path="/login" element={<Login />} />
            <Route
              path="/search"
              element={
                <SearchResultPage
                  wordData={wordData}
                  setWordData={setWordData}
                />
              }
            />
            <Route
              path="/edit"
              element={
                <EditWordForm wordData={wordData} setWordData={setWordData} />
              }
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;

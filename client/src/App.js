import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/Home.js';
import SearchResultPage from './components/SearchResultPage.js';
import EditWordForm from './components/EditWordForm.js';
import SlangForum from './components/forum/SlangForum.js';
import Confirmation from './components/Confirmation.js';
import Error from './components/Error.js';
import NotFound from './components/NotFound.js';

import './css/App.css';
import Login from './components/Login.js';
import { Sidebar } from 'react-pro-sidebar';
import Navbar from './components/Navbar.js';

function App() {
  return (
    <div className="app">
      <div className="navbar-container">
        <Sidebar>
          <Navbar />
        </Sidebar>
        </div>
      <div className="routes-container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/search" element={<SearchResultPage />} />
          <Route path="/edit/:wordId" element={<EditWordForm />} />
          <Route path="/forum" element={<SlangForum />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/error" element={<Error />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

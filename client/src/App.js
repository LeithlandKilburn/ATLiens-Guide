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
import SingleWordCard from './components/SingleWordCard.js';

//TODO: change to word name path for search

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
          <Route path="/signup" element={<Login />} />
          <Route path="/search" element={<SearchResultPage />} />
          <Route path="/edit/:wordId" element={<EditWordForm />} />
          <Route path="/forum" element={<SlangForum />} />
          <Route path="/add" element={<EditWordForm />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/error" element={<Error />} />
          <Route path="/view/:wordId" element={<SingleWordCard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

import { Routes, Route } from 'react-router-dom';
import HomePage from './components/Home.js';
import SearchResultPage from './components/SearchResultPage.js';
import EditWordForm from './components/EditWordForm.js';
import Confirmation from './components/Confirmation.js';
import Error from './components/Error.js';
import NotFound from './components/NotFound.js';

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
            <Route path="/signup" element={<Login />} />
            <Route path="/search" element={<SearchResultPage />} />
            <Route path="/edit/:wordId" element={<EditWordForm />} />
            <Route path="/add" element={<EditWordForm />} />
            <Route path="/confirmation" element={<Confirmation />} />
            <Route path="/error" element={<Error />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;

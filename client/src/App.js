import {useState, useEffect} from "react"; 
import { Routes, Route, Link, Router } from 'react-router-dom';
import Home from './components/Home.js';
import Login from './components/Login.js';


function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;

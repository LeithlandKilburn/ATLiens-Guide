import {useState, useEffect} from "react"; 
import { Routes, Route, Link, Router } from 'react-router-dom';
import Home from './components/Home.js';


function App() {
  return (
    <div className="App">
    <h1>333</h1>
      <Routes>
          <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;

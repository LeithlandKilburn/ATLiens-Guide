import React from 'react';
import { useContext } from 'react';

import SearchBar from './SearchBar';
import AuthContext from '../contexts/AuthContext';

function Home({ wordData, setWordData }) {
  return <SearchBar wordData={wordData} setWordData={setWordData} />;
}

export default Home;

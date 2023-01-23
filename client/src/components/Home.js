import React from 'react';
import { useContext } from 'react';

import SearchBar from './SearchBar';
import FeaturedWords from './FeaturedWords';
import AuthContext from '../contexts/AuthContext';

function Home({ wordData, setWordData }) {
  return (
    <div>
      <SearchBar wordData={wordData} setWordData={setWordData} />
      <FeaturedWords wordData={wordData}/>
    </div>
  )
}

export default Home;

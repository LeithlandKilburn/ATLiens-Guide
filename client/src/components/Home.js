import React from 'react';
import SearchBar from './SearchBar';
import FeaturedWords from './FeaturedWords';

function Home({ wordData }) {
  return (
    <div>
      <SearchBar />
      <FeaturedWords wordData={wordData} />
    </div>
  );
}

export default Home;

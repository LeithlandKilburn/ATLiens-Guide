import React from 'react';
import SearchBar from './SearchBar';
import FeaturedWords from './FeaturedWords';
import FilterSearch from './FilterSearch';

function Home({ wordData }) {
  return (
    <div>
      <SearchBar />
      <FilterSearch/>
      <FeaturedWords wordData={wordData} />
    </div>
  );
}

export default Home;

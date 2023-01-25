import React from 'react';
import { useSelector } from 'react-redux';
import SearchBar from './SearchBar';
import FeaturedWords from './FeaturedWords';
import FilterSearch from './FilterSearch';
import SearchResultPage from './SearchResultPage.js'

function Home() {

  const words = useSelector((state) => state.word.words);
  console.log(words);


  let wordDisplay = words.length > 0 ? <SearchResultPage words={words[0]}/> : <FeaturedWords />

  return (
    <div>
      <SearchBar />
      <FilterSearch/>
      {wordDisplay}
    </div>
  );
}

export default Home;

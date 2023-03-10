import React from 'react';
import { useSelector } from 'react-redux';
import SearchBar from './SearchBar';
import FeaturedWords from './FeaturedWords';
import FilterSearch from './FilterSearch';
import SearchResultPage from './SearchResultPage.js';
import '../css/Home.css';

function Home() {
  const words = useSelector((state) => state.word.words);

  let homeDisplay =
    words.length > 0 ? (
      <SearchResultPage words={words[0]} />
    ) : (
      <>
        <SearchBar />
        <FilterSearch />
        <FeaturedWords />
      </>
    );

  return (
    <div className="home-cont">
      <h1 className="home-header">
        <span className="home-header-span">ATL</span>iens
      </h1>
      <p className="home-sub-text">The Official ATL Slang Finder</p>
      {homeDisplay}
    </div>
  );
}

export default Home;

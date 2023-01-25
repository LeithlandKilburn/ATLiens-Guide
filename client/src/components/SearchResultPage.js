import React from 'react';
import '../css/SearchResultPage.css';
import WordCard from './WordCard';

const SearchResultPage = ({ words }) => {
  //Redux's state.

  let wordDisplay = words.length > 1 ? words.map(word => <WordCard word={word}/>) : <WordCard word={words}/>;

  return (
    <div className="card-container">
      {wordDisplay}
    </div>
  );
};

export default SearchResultPage;

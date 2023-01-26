import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../css/SearchResultPage.css';
import WordCard from './WordCard';
import { deleteWord } from '../store/slices/WordSlice';

const SearchResultPage = ({ words }) => {

  const dispatch = useDispatch();

  const clearSearch = () => {
    dispatch(deleteWord());
  }

  let wordDisplay = words.length > 1 ? words.map(word => <WordCard word={word}/>) : <WordCard word={words}/>;

  return (
    <>
      <div className="search-header">
        <h1>Search Results</h1>
        <div className="search-back-button" onClick={clearSearch}>Back</div>
      </div>
      <div className="search-card-container">
      {wordDisplay}
    </div>
    </>
  );
};

export default SearchResultPage;

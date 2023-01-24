import React from 'react';
import '../css/SearchResultPage.css';
import { useSelector } from 'react-redux';
import WordCard from './WordCard';

const SearchResultPage = () => {
  //Redux's state.
  const words = useSelector((state) => state.word.words);
  console.log(words);

  return (
    <div className="card-container">
      {words.map((word, index) => {
        return <WordCard word={word} />;
      })}
    </div>
  );
};

export default SearchResultPage;

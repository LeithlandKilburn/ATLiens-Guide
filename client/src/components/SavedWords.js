import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { favWords } from '../store/slices/WordSlice';
import '../css/SavedWords.css';

import WordCard from './WordCard';

const SavedWords = () => {
  const dispatch = useDispatch();

  //Redux's state.
  const favoriteWords = useSelector((state) => state.word.favWords);
  console.log(favoriteWords);

  useEffect(() => {
    fetch('http://localhost:8080/atliens/word/')
      .then((response) => response.json())
      // .then((data) => console.log(data));
      .then((data) => dispatch(favWords(data)));
  }, []); // this will happen only once when the component is loaded

  return (
    <div className="saved-word-overall-container">
      <div className="add-word-header">
        <h1>Favorite Words</h1>
      </div>

      <div className="saved-card-container-main">
        <div className="saved-card-container">
          {favoriteWords[0]?.map((word, index) => {
            console.log(word);
            return <WordCard key={index} word={word} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SavedWords;

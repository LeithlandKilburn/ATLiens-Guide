import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import WordCard from './WordCard';
import '../css/FeaturedWords.css';

const FeaturedWords = ({ wordData }) => {
  return (
    <div className="scrolling-container">
      <div className="scrolling-wrapper">
        <WordCard wordData={wordData}/>
        <WordCard wordData={wordData}/>
        <WordCard wordData={wordData}/>
        <WordCard wordData={wordData}/>
        <WordCard wordData={wordData}/>
      </div>
    </div>
  );
};

export default FeaturedWords;

import React from 'react';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import WordCard from './WordCard.js';
import { useSelector } from 'react-redux';
import { wordData } from '../store/slices/WordSlice';
import '../css/FeaturedWords.css';

const FeaturedWords = () => {

  const [featuredWords, setFeaturedWords] = useState([]);

  useEffect(() => {
    try {
      fetch('http://localhost:8080/atliens/word/')
        .then((response) => response.json())
        .then((data) => {
          setFeaturedWords(data);
        })
    } catch (err) {
      console.error(err);
    }
  }, [])

  let featWords = featuredWords.map((word) => <WordCard word={word}/>)


  return (
    <div className="featured-container">
      <h1 className="feat-header">Featured Words</h1>
      <div className="scrolling-container">
        <div className="scrolling-wrapper">
          {featWords}{featWords}{featWords}{featWords}{featWords}
        </div>
      </div>
    </div>
  );
};

export default FeaturedWords;

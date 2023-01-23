import React from 'react';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import WordCard from './WordCard';
import { useSelector } from 'react-redux';
import { wordData } from '../store/slices/WordSlice';
import '../css/FeaturedWords.css';

const FeaturedWords = ({ wordData }) => {

  const [featuredWords, setFeaturedWords] = useState([]);

  useEffect(() => {
    try {
      fetch('http://localhost:8080/atliens/word/')
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setFeaturedWords(data);
        })
    } catch (err) {
      console.error(err);
    }
  }, [])

  let featWords = featuredWords.map((word) => <WordCard word={word}/>)


  return (
    <div className="scrolling-container">
      {console.log(featuredWords)}
      <h1>Featured Words</h1>
      <div className="scrolling-wrapper">
        {featWords}
      </div>
    </div>
  );
};

export default FeaturedWords;

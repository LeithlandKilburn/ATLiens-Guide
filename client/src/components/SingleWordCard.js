import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteWord, wordData } from '../store/slices/WordSlice';
import { editWordData } from '../store/slices/EditWordSlice';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { Heart } from 'react-feather';
import '../css/SingleWordCard.css';

const SingleWordCard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //Redux's state.
  const singleWord = useSelector((state) => state.editWord.word);
  const user = useSelector((state) => state.auth.user);
  const authToken = useSelector((state) => state.auth.authToken);

  return (
    <div className="single-word-container">
      <Heart style={{ cursor: 'pointer' }} />
      <h2>Word: {singleWord?.name}</h2>
      <p>Definition: {singleWord?.definition}</p>
      <p>Example: {singleWord?.example}</p>
      <p>Use Rating: {singleWord?.useRating}</p>
      <p>Categories: {singleWord?.categories}</p>
      <p>Video URL: {singleWord?.videoUrl}</p>
    </div>
  );
};

export default SingleWordCard;

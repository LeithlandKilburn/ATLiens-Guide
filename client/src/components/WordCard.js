import React from 'react';
import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Edit, X, Edit2 } from 'react-feather';
import '../css/WordCard.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteWord, wordData } from '../store/slices/WordSlice';
import { editWordData } from '../store/slices/EditWordSlice';
import Alert from 'react-bootstrap/Alert';

const WordCard = ({ word }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //Redux's state.
  const words = useSelector((state) => state.word.words);
  const user = useSelector((state) => state.auth.user);
  // console.log(user);
  const authToken = useSelector((state) => state.auth.authToken);
  // console.log(authToken);
  // const role = user ? user.authorities : null;
  // console.log(role);

  const handleDelete = (wordId) => {
    fetch(`http://localhost:8080/atliens/word/${wordId}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    })
      .then((response) => {
        console.log(response);
        if (response.status !== 204) {
          console.log('uh oh');
        }
      })
      // or you can remove it from the state
      .then(() => {
        dispatchEvent(deleteWord(wordId));
        navigate('/confirmation');
      })
      .catch(() => {
        navigate('/error');
      });
  };

  const handleEdit = (wordId) => {
    dispatch(editWordData(word));
    // console.log(editWordData);
    navigate(`/edit/${wordId}`);
  };

  return (
    <div className="single-card">
      <Card>
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body>
          <div className="card-buttons">
            <Edit2
              onClick={() => {
                handleEdit(word?.wordId);
              }}
            />
            <X
              onClick={() => {
                handleDelete(word?.wordId);
              }}
            />
          </div>
          <div className="card-body">
            <Card.Title>{word?.name}</Card.Title>
            <Card.Text>{word?.definition}</Card.Text>
            <Card.Text>{word?.useRating}</Card.Text>
            {/* <Card.Title>TEST NAME</Card.Title>
            <Card.Text>TEST DEFINITION</Card.Text>
            <Card.Text>TEST USERATING</Card.Text> */}
            <Button variant="primary">View More</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default WordCard;

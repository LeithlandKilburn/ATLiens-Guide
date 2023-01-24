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
        dispatch(deleteWord(wordId));
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

  const handleViewMore = (wordId) => {
    dispatch(editWordData(word));
    navigate(`/view/${wordId}`);
  };

  return (
    <div className="single-card">
      <Card>
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body>
          <div className="card-buttons">
            <Edit2
              style={{ cursor: 'pointer' }}
              onClick={() => {
                handleEdit(word?.wordId);
              }}
            />
            <X
              style={{ cursor: 'pointer' }}
              onClick={() => {
                handleDelete(word?.wordId);
              }}
            />
          </div>
          <div className="card-body">
            <Card.Title>{word?.name}</Card.Title>
            <Card.Text>{word?.definition}</Card.Text>
            <Card.Text>{word?.useRating}</Card.Text>

            <Button variant="primary" onClick={handleViewMore}>
              View More
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default WordCard;

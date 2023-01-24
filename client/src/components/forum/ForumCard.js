import React from 'react';
import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Edit, X, Edit2 } from 'react-feather';
import { useSelector } from 'react-redux';
import { deleteWord, wordData } from '../../store/slices/WordSlice';

export default function ForumCard ({ word }) {
    const navigate = useNavigate();

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
      navigate(`/edit/${wordId}`);
    };
  
    return (
      <div className="single-card">
        <Card>
          {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
          <Card.Body>
            <div className="card-body">
              <Card.Title>{word?.name}</Card.Title>
              <Card.Text>{word?.definition}</Card.Text>
              <Card.Text>{word?.useRating}</Card.Text>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
}
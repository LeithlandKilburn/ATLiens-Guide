import React from 'react';
import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Edit, X, Edit2 } from 'react-feather';
import '../css/WordCard.css';

const WordCard = ({ wordData }) => {
  const navigate = useNavigate();

  const handleDelete = () => {};

  const handleEdit = () => {
    navigate('/edit/' + wordData.wordId);
  };

  return (
    <div className="single-card">
      <Card>
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body>
          <div className="card-buttons">
            <Edit2 onClick={handleEdit} />
            <X onClick={handleDelete} />
          </div>
          <div className="card-body">
            {/* <Card.Title>{wordData.name}</Card.Title>
          <Card.Text>{wordData.definition}</Card.Text>
          <Card.Text>{wordData.useRating}</Card.Text> */}
            <Card.Title>TEST NAME</Card.Title>
            <Card.Text>TEST DEFINITION</Card.Text>
            <Card.Text>TEST USERATING</Card.Text>
            <Button variant="primary">View More</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default WordCard;

import React from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import '../css/Confirmation.css';

const Confirmation = () => {
  const navigate = useNavigate();

  return (
    <div className="confirmation-container">
      <h2>Word was deleted!</h2>
      <Button
        onClick={() => {
          navigate('/');
        }}
      >
        Keep Searching
      </Button>
    </div>
  );
};

export default Confirmation;

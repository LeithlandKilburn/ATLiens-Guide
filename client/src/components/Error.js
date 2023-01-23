import React from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import '../css/Error.css';

const Error = () => {
  const navigate = useNavigate();

  return (
    <div className="error-container">
      <h3>Error with your last request!</h3>
      <Button
        onClick={() => {
          navigate('/');
        }}
      >
        Home
      </Button>
    </div>
  );
};

export default Error;

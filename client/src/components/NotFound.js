import React from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import '../css/NotFound.css';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found-container">
      <h3>404 Page Not Found</h3>
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

export default NotFound;

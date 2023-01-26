import React from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import error from '../assets/svg/error.svg';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center' }}>
      <div>
        <img
          src={error}
          alt="error robot"
          style={{
            height: '600px',
          }}
        />
        <h2 style={{ color: 'white' }}>Uh oh! 404 Page Not Found.</h2>
        <div style={{ padding: '2em' }}>
          <Button
            variant="dark"
            onClick={() => {
              navigate('/');
            }}
          >
            Go Back Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

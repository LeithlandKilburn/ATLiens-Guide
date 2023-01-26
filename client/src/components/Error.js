import React from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import bugSvg from '../assets/svg/bug.svg';

const Error = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center', padding: '10em' }}>
      <div>
        <img
          src={bugSvg}
          alt="happy sun"
          style={{
            height: '400px',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            borderRadius: '50%',
          }}
        />
        <h2 style={{ color: 'white', paddingTop: '20px' }}>
          ERROR WITH YOUR LAST REQUEST!
        </h2>
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

export default Error;

import React from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import happySvg from '../assets/svg/happy.svg';

const Confirmation = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center', padding: '10em' }}>
      <div>
        <img
          src={happySvg}
          alt="happy sun"
          style={{
            height: '400px',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            borderRadius: '50%',
          }}
        />
        <h2 style={{ color: 'white', paddingTop: '20px' }}>SUCCESS!</h2>
        <div style={{ padding: '2em' }}>
          <Button
            variant="dark"
            onClick={() => {
              navigate('/');
            }}
          >
            Keep Searching
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;

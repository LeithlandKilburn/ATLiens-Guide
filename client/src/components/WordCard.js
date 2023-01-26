import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { X, Edit, Star } from 'react-feather';
import '../css/WordCard.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteWord } from '../store/slices/WordSlice';
import { editWordData, setFormType } from '../store/slices/EditWordSlice';

const WordCard = ({ word }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth.user);
  const authToken = useSelector((state) => state.auth.authToken);
  const authorities = useSelector((state) => state.auth.authorities);

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
    dispatch(setFormType('edit'));
    navigate(`/edit/${wordId}`);
  };

  const handleViewMore = (wordId) => {
    dispatch(editWordData(word));
    navigate(`/view/${wordId}`);
  };

  return (
    <div className="single-card">
      <Card className="single-body">
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body className="card-body-container">
          {authorities === 'ADMIN' ? (
            <div className="card-buttons">
              <Edit
                className="single-button"
                size={25}
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  handleEdit(word?.wordId);
                }}
              />
              <X
                className="single-button"
                size={25}
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  handleDelete(word?.wordId);
                }}
              />
            </div>
          ) : null}

          <div className="card-body">
            <Card.Title
              style={{
                fontWeight: 'bold',
                textAlign: 'center',
                marginBottom: '1em',
              }}
            >
              {word?.name}
            </Card.Title>
            <Card.Text>
              <span style={{ fontWeight: 'bold' }}>Definition:</span>{' '}
              {word?.definition}
            </Card.Text>
            <Card.Text className="card-star-container">
              <span style={{ fontWeight: 'bold' }}>Use Rating:</span>
              <div className="star-cont">
                {[...Array(word?.useRating)].map((_, i) => (
                  <Star size={20} />
                ))}
              </div>
            </Card.Text>
          </div>

          <Button variant="dark" onClick={handleViewMore}>
            View More
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default WordCard;

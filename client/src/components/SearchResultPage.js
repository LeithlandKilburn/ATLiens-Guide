import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/SearchResultPage.css';
import { useSelector } from 'react-redux';
import { wordData } from '../store/slices/WordSlice';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { X, Edit2 } from 'react-feather';

const SearchResultPage = () => {
  const navigate = useNavigate();

  //Redux's state.
  const words = useSelector((state) => state.word.words);
  const user = useSelector((state) => state.auth.user);
  const authToken = useSelector((state) => state.auth.authToken);
  // const isAdmin = useSelector((state) => state.auth.isAdmin);
  // console.log(isAdmin);

  const handleDelete = (wordId) => {
    fetch(`http://localhost:8080/atliens/word/${wordId}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }).then((response) => {
      if (response.status !== 204) {
        return Promise.reject('response is not 204 No Content');
      }
      return null;
    });
    // .then(() => {
    //   navigate('/confirmation', { state: { msg: '👍🏾' } });
    // })
    // .catch(() => {
    //   navigate('/error', { state: { msg: '👎🏾' } });
    // });
  };

  const handleEdit = (wordId) => {
    navigate(`/edit/${wordId}`);
  };

  return (
    <div className="card-container">
      {/* map through the redux state data */}
      {words.map((word, index) => {
        return (
          <div key={index} className="single-card">
            <Card>
              {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
              <Card.Body>
                <div className="card-buttons">
                  {/* {isAdmin ?  */}
                  <Edit2 onClick={handleEdit(word.wordId)} />
                  {/*  : null} */}
                  {isAdmin ? <X onClick={handleDelete(word.wordId)} /> : null}
                </div>
                <div className="card-body">
                  <Card.Title>{word.name}</Card.Title>
                  <Card.Text>{word.definition}</Card.Text>
                  <Card.Text>{word.useRating}</Card.Text>
                  <Button variant="primary">View More</Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        );
      })}

      {/* <WordCard wordData={wordData} />
      <WordCard wordData={wordData} />
      <WordCard wordData={wordData} />

      <WordCard wordData={wordData} />
      <WordCard wordData={wordData} />
      <WordCard wordData={wordData} />

      <WordCard wordData={wordData} />
      <WordCard wordData={wordData} />
      <WordCard wordData={wordData} /> */}
    </div>
  );
};

export default SearchResultPage;

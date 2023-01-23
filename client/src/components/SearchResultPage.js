import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/SearchResultPage.css';
import { useSelector } from 'react-redux';
import { wordData } from '../store/slices/WordSlice';
import WordCard from './WordCard';

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
      {words.map((word, index) => <WordCard word={word}/>)}

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

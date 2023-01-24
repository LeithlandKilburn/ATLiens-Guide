import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

import { Search } from 'react-feather';
import '../css/SearchBar.css';
import { useSelector, useDispatch } from 'react-redux';
import { wordData } from '../store/slices/WordSlice';

const SearchBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [searchValue, setSearchValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearch = () => {
    if (searchValue) {
      try {
        fetch('http://localhost:8080/atliens/word/' + searchValue)
          .then((response) => response.json())
          .then((data) => {
            if (data.length === 0) {
              setErrorMessage('No Word Found. Please Try Again!');
            } else {
              setErrorMessage('');
              // setting the global state
              dispatch(wordData(data));
              navigate('/search');
            }
          });
  
        // .then(() => {
        //   navigate('/search');
        // });
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <div className="search-bar-container">
      <div className="search-cont">
        <InputGroup size="lg">
          <InputGroup.Text id="inputGroup-sizing-lg">
            <Search />
          </InputGroup.Text>
          <Form.Control
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
            onChange={handleInputChange}
          />
        </InputGroup>
        <Button variant="primary" type="submit" onClick={handleSearch}>
          Search
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;

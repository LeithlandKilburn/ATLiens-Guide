import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

import { Search } from 'react-feather';
import '../css/SearchBar.css';
import AuthContext from '../contexts/AuthContext';

const SearchBar = ({ wordData, setWordData }) => {
  const navigate = useNavigate();

  const [searchValue, setSearchValue] = useState('');
  // const [wordData, setWordData] = useState([]);

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearch = () => {
    try {
      fetch('http://localhost:8080/words/' + searchValue)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setWordData([...wordData, data]);
        }) // set that data

        .then(() => {
          navigate('/search');
        });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="search-bar-container">
      <div className="container">
        <InputGroup size="lg">
          <InputGroup.Text id="inputGroup-sizing-lg">
            <Search size="20" />
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

import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Search } from 'react-feather';
import './SearchBar.css';

const SearchBar = () => {
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
          />
        </InputGroup>
      </div>
    </div>
  );
};

export default SearchBar;

import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { PlusSquare, AlignLeft, Hash, List, Link } from 'react-feather';
import '../css/AddWordForm.css';

import '../css/EditWordForm.css';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const AddWordFrom = () => {
  const navigate = useNavigate();

  const [error, setError] = useState('');

  //Redux's state
  const user = useSelector((state) => state.auth.user);
  const authToken = useSelector((state) => state.auth.authToken);

  const [wordToAdd, setWordToAdd] = useState({});

  // Function to handle input changes for adding a new word
  const handleChange = (e) => {
    const newWord = { ...wordToAdd };
    newWord[e.target.name] = e.target.value;
    console.log(newWord);
    setWordToAdd(newWord);
  };

  // Function to handle adding a new word
  const handleAdd = () => {
    fetch(`http://localhost:8080/atliens/word`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`,
      },
      body: JSON.stringify(wordToAdd),
    })
      .then((response) => {
        if (response.status === 201) {
          console.log(response);
          navigate('/confirmation');
        } else {
          console.log('Failure');
          setError('Invalid Inputs');
        }
      })
      .catch(() => {
        navigate('/error');
      });
  };

  return (
    <div className="add-word-container">
      <div className="add-word-header">
        <h1>Add a new word</h1>
      </div>

      <div className="log-in-error-container">
        {error !== '' && <p className="log-in-error">{error}</p>}
      </div>

      <Form className="form-container">
        <InputGroup size="lg">
          <InputGroup.Text id="inputGroup-sizing-lg">
            <PlusSquare />
          </InputGroup.Text>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter Word"
            onChange={handleChange}
          />
        </InputGroup>

        <InputGroup size="lg" style={{ paddingTop: '2em' }}>
          <InputGroup.Text id="inputGroup-sizing-lg">
            <AlignLeft />
          </InputGroup.Text>
          <Form.Control
            type="text"
            name="definition"
            placeholder="Enter Definition"
            onChange={handleChange}
          />
        </InputGroup>

        <InputGroup size="lg" style={{ paddingTop: '2em' }}>
          <InputGroup.Text id="inputGroup-sizing-lg">
            <AlignLeft />
          </InputGroup.Text>
          <Form.Control
            type="text"
            name="example"
            placeholder="Enter Example"
            onChange={handleChange}
          />
        </InputGroup>
        <Form.Text style={{ color: 'white', fontSize: '15px' }}>
          Use the word in a sentence.
        </Form.Text>

        <InputGroup size="lg" style={{ paddingTop: '2em' }}>
          <InputGroup.Text id="inputGroup-sizing-lg">
            <Hash />
          </InputGroup.Text>
          <Form.Control
            type="number"
            name="useRating"
            placeholder="Enter Use Rating"
            onChange={handleChange}
          />
        </InputGroup>
        <Form.Text style={{ color: 'white', fontSize: '15px' }}>
          How often is this word being used?
        </Form.Text>

        <InputGroup size="lg" style={{ paddingTop: '2em' }}>
          <InputGroup.Text id="inputGroup-sizing-lg">
            <List />
          </InputGroup.Text>
          <Form.Control
            type="text"
            name="categories"
            placeholder="Categories"
            onChange={handleChange}
          />
        </InputGroup>

        <InputGroup size="lg" style={{ paddingTop: '2em' }}>
          <InputGroup.Text id="inputGroup-sizing-lg">
            <Link />
          </InputGroup.Text>
          <Form.Control
            type="text"
            name="videoUrl"
            placeholder="Enter Video URL"
            onChange={handleChange}
          />
        </InputGroup>
        <Form.Text style={{ color: 'white', fontSize: '15px' }}>
          Share a video of this word being used. Please use the embed link.
        </Form.Text>

        <div style={{ paddingTop: '1em' }}>
          <Button variant="dark" onClick={handleAdd}>
            Add Word
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AddWordFrom;

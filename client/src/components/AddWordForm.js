import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../css/EditWordForm.css';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const AddWordFrom = () => {
  const navigate = useNavigate();

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
        }
      })
      .catch(() => {
        navigate('/error');
      });
  };

  return (
    <>
      <h2 className="form-header">Add a new word</h2>
      <Form className="form-container">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Word</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter Word"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Definition</Form.Label>
          <Form.Control
            type="text"
            name="definition"
            placeholder="Enter Definition"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Example</Form.Label>
          <Form.Control
            type="text"
            name="example"
            placeholder="Enter Example"
            onChange={handleChange}
          />
          <Form.Text className="text-muted">
            Use the word in a sentence.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Use Rating</Form.Label>
          <Form.Control
            type="number"
            name="useRating"
            placeholder="Enter Use Rating"
            onChange={handleChange}
          />
          <Form.Text className="text-muted">
            How often is this word being used?
          </Form.Text>
        </Form.Group>

        <Form.Label>Categories</Form.Label>
        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Category 1" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Category 2" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Category 3" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Category 4" />
        </Form.Group> */}
        <Form.Control
          type="text"
          name="categories"
          placeholder="Categories"
          onChange={handleChange}
        />

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Video URL</Form.Label>
          <Form.Control
            type="text"
            name="videoUrl"
            placeholder="Enter Video URL"
            onChange={handleChange}
          />
          <Form.Text className="text-muted">
            Share a video of this word being used. Please use the embed link.
          </Form.Text>
        </Form.Group>

        <Button variant="primary" onClick={handleAdd}>
          Add Word
        </Button>
      </Form>
    </>
  );
};

export default AddWordFrom;

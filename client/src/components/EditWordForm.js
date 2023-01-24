import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../css/EditWordForm.css';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { editWordData } from '../store/slices/EditWordSlice';

const EditWordForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //Redux's state.
  const singleWord = useSelector((state) => state.editWord.word);
  const user = useSelector((state) => state.auth.user);
  const authToken = useSelector((state) => state.auth.authToken);

  const [updatedWord, setUpdatedWord] = useState(singleWord);

  const handleChange = (e) => {
    const updatedWord = { ...singleWord };
    updatedWord[e.target.name] = e.target.value;
    setUpdatedWord(updatedWord);
  };

  const handleEdit = () => {
    fetch(`http://localhost:8080/atliens/word/${singleWord.wordId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`,
      },
      body: JSON.stringify(updatedWord),
    })
      .then((response) => {
        if (response.status === 204) {
          dispatch(editWordData(updatedWord));
          navigate('/confirmation');
        } else {
          navigate('/error');
        }
      })
      .catch(() => {
        navigate('/error');
      });
  };

  return (
    <>
      <h2 className="form-header">Edit a word</h2>
      <Form className="form-container">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Word</Form.Label>
          <Form.Control
            type="text"
            defaultValue={singleWord?.name}
            placeholder="Enter Word"
            onChange={handleChange}
          />
          {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Definition</Form.Label>
          <Form.Control
            type="email"
            defaultValue={singleWord?.definition}
            placeholder="Enter Definition"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Example</Form.Label>
          <Form.Control
            type="email"
            defaultValue={singleWord?.example}
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
            type="email"
            defaultValue={singleWord?.useRating}
            placeholder="Enter Use Rating"
            onChange={handleChange}
          />
          <Form.Text className="text-muted">
            How often is this word being used?
          </Form.Text>
        </Form.Group>

        <Form.Label>Categories</Form.Label>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
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
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Video URL</Form.Label>
          <Form.Control
            type="email"
            defaultValue={singleWord?.videoUrl}
            placeholder="Enter Video URL"
            onChange={handleChange}
          />
          <Form.Text className="text-muted">
            Share a video of this word being used.
          </Form.Text>
        </Form.Group>

        {/* <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Gif</Form.Label>
          <Form.Control type="email" placeholder="Enter Gif" />
        </Form.Group> */}

        <Button variant="primary" type="submit" onClick={handleEdit}>
          Edit Word
        </Button>
      </Form>
    </>
  );
};

export default EditWordForm;

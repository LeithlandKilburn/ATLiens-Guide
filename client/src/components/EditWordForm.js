import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../css/EditWordForm.css';
import { useSelector, useDispatch } from 'react-redux';

const EditWordForm = ({ word }) => {
  const dispatch = useDispatch();

  //Redux's state.
  const words = useSelector((state) => state.word.words);

  return (
    <>
      <h2 className="form-header">Edit a word</h2>
      <Form className="form-container">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Word</Form.Label>
          <Form.Control
            type="email"
            defaultValue={word?.name}
            placeholder="Enter Word"
          />
          {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Definition</Form.Label>
          <Form.Control type="email" placeholder="Enter Definition" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Example</Form.Label>
          <Form.Control type="email" placeholder="Enter Example" />
          <Form.Text className="text-muted">
            Use the word in a sentence.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Use Rating</Form.Label>
          <Form.Control type="email" placeholder="Enter Use Rating" />
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
          <Form.Control type="email" placeholder="Enter Video URL" />
          <Form.Text className="text-muted">
            Share a video of this word being used.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Gif</Form.Label>
          <Form.Control type="email" placeholder="Enter Gif" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Edit Word
        </Button>
      </Form>
    </>
  );
};

export default EditWordForm;

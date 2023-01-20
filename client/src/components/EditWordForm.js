import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../css/EditWordForm.css';

const EditWordForm = () => {
  return (
    <Form className="form-container">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Word</Form.Label>
        <Form.Control type="email" placeholder="Enter Word" />
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
        Submit
      </Button>
    </Form>
  );
};

export default EditWordForm;

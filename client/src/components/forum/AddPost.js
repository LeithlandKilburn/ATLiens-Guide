import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../../css/EditWordForm.css';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { editWordData } from '../../store/slices/EditWordSlice';
import InputGroup from 'react-bootstrap/InputGroup';
import { PlusSquare, AlignLeft, Hash, List, Link } from 'react-feather';

export default function AddPost() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //Redux's state.
  const user = useSelector((state) => state.auth.user);
  const authToken = useSelector((state) => state.auth.authToken);

  const [wordToAdd, setWordToAdd] = useState('');

  const handleChange = (e) => {
    const newWord = { ...wordToAdd };
    newWord[e.target.name] = e.target.value;
    console.log(newWord);
    setWordToAdd(newWord);
  };

  const handleAdd = () => {
    fetch(`http://localhost:8080/atliens/forum`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`,
      },
      body: JSON.stringify(wordToAdd),
    })
      .then((response) => {
        if (response.status === 201) {
          // dispatch(editWordData(updatedWord));
          navigate('/confirmation');
        }
      })
      .catch(() => {
        navigate('/error');
      });
  };

  return (
    <>
      {/* <h2 className="form-header">Make A New Slang Word</h2> */}

      <div className="add-word-header" style={{ marginTop: '4em' }}>
        <h1>Make A New Slang Word</h1>
      </div>

      <Form className="form-container">
        {/* <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Word</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter Word"
            onChange={handleChange}
          />
          <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
        </Form.Group> */}

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

        {/* <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Definition</Form.Label>
          <Form.Control
            type="text"
            name="definition"
            placeholder="Enter Definition"
            onChange={handleChange}
          />
        </Form.Group> */}

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

        {/* <Form.Group className="mb-3" controlId="formBasicEmail">
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
        </Form.Group> */}

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

        {/* <Form.Group className="mb-3" controlId="formBasicEmail">
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
        </Form.Group> */}

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

        <div style={{ paddingTop: '1em' }}>
          <Button variant="dark" onClick={handleAdd}>
            Add Forum Post
          </Button>
        </div>
      </Form>
    </>
  );
}

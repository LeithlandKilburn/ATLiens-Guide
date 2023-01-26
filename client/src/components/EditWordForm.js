import React from 'react';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../css/EditWordForm.css';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { editWordData, setFormType } from '../store/slices/EditWordSlice';

const EditWordForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(editWordData({}));
  // }, []);

  //Redux's state
  const singleWord = useSelector((state) => state.editWord.word);
  const user = useSelector((state) => state.auth.user);
  const authToken = useSelector((state) => state.auth.authToken);
  const formType = useSelector((state) => state.editWord.formType);
  console.log(formType);

  // States for editing an existing word / adding a new word
  const [updatedWord, setUpdatedWord] = useState(singleWord);
  // const [wordToAdd, setWordToAdd] = useState({});

  const handleChange = (e) => {
    const updatedWord = { ...singleWord };
    updatedWord[e.target.name] = e.target.value;
    console.log(updatedWord);
    setUpdatedWord(updatedWord);
  };

  console.log(updatedWord);
  console.log(singleWord);

  // Function to handle input changes for adding a new word
  // const handleChangeAdd = (e) => {
  //   const newWord = { ...wordToAdd };
  //   newWord[e.target.name] = e.target.value;
  //   console.log(newWord);
  //   setWordToAdd(newWord);
  // };

  // const handleChange = (e) => {
  //   if (formType === 'edit') {
  //     const updatedWord = { ...singleWord };
  //     updatedWord[e.target.name] = e.target.value;
  //     console.log(updatedWord);
  //     setUpdatedWord(updatedWord);
  //   } else if (formType === 'add') {
  //     const newWord = { ...wordToAdd };
  //     newWord[e.target.name] = e.target.value;
  //     console.log(newWord);
  //     setWordToAdd(newWord);
  //   }
  // };

  // Function to handle editing an existing word
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
        }
      })
      .catch(() => {
        navigate('/error');
      });
  };

  // Function to handle adding a new word
  // const handleAdd = () => {
  //   fetch(`http://localhost:8080/atliens/word`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Authorization: `Bearer ${authToken}`,
  //     },
  //     body: JSON.stringify(wordToAdd),
  //   })
  //     .then((response) => {
  //       if (response.status === 201) {
  //         console.log(response);
  //         navigate('/confirmation');
  //       }
  //     })
  //     .catch(() => {
  //       navigate('/error');
  //     });
  // };

  return (
    <div className="form-container">
      <h2 className="form-header">
        {formType === 'add' ? 'Add a word' : 'Edit a word'}
      </h2>
      <Form className="form-container">
        <Form.Group className="mb-3">
          <Form.Label>Word</Form.Label>
          <Form.Control
            type="text"
            name="name"
            defaultValue={singleWord?.name}
            placeholder="Enter Word"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Definition</Form.Label>
          <Form.Control
            type="text"
            name="definition"
            defaultValue={singleWord?.definition}
            placeholder="Enter Definition"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Example</Form.Label>
          <Form.Control
            type="text"
            name="example"
            defaultValue={singleWord?.example}
            placeholder="Enter Example"
            onChange={handleChange}
          />
          <Form.Text className="text-muted">
            Use the word in a sentence.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Use Rating</Form.Label>
          <Form.Control
            type="number"
            name="useRating"
            defaultValue={singleWord?.useRating}
            placeholder="Enter Use Rating"
            onChange={handleChange}
          />
          <Form.Text className="text-muted">
            How often is this word being used?
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Categories</Form.Label>
          <Form.Control
            type="text"
            name="categories"
            defaultValue={singleWord?.categories}
            placeholder="Categories"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Video URL</Form.Label>
          <Form.Control
            type="text"
            name="videoUrl"
            defaultValue={singleWord?.videoUrl}
            placeholder="Enter Video URL"
            onChange={handleChange}
          />
          <Form.Text className="text-muted">
            Share a video of this word being used. Please use the embed link.
          </Form.Text>
        </Form.Group>

        {formType === 'edit' ? (
          <Button variant="primary" onClick={handleEdit}>
            Edit Word
          </Button>
        ) : null}

        {/* {formType === 'add' ? (
          <Button variant="primary" onClick={handleAdd}>
            Add Word
          </Button>
        ) : null} */}
      </Form>
    </div>
  );
};

export default EditWordForm;

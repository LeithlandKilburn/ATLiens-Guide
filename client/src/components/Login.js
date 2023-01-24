import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../store/slices/AuthSlice.js';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// add messaging

function Login() {
  //Components state.
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  //Redux's state.
  const user = useSelector((state) => state.auth.user);
  const authToken = useSelector((state) => state.auth.authToken);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleChange = (e) => {
    if (e.target.name === 'username') {
      setUsername(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };

  const handleCreate = (e) => {
    e.preventDefault();
    console.log(username, password);
    fetch('http://localhost:8080/atliens/user/create_account', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    }).then((resp) => {
      if (resp.status === 201) {
        console.log('success');
        navigate('/');
      } else {
        console.log('Failure');
      }
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(username, password);
    fetch('http://localhost:8080/atliens/authenticate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then((resp) => {
        if (resp.status === 200) {
          console.log('success');
          console.log(resp);
          return resp.json();
          //navigate("/");
        } else {
          console.log('Failure');
        }
      })
      .then((data) => {
        console.log(data);
        // setting the global state
        dispatch(login(data));
      });
  };

  const addWord = (word) => {
    fetch('http://localhost:8080/atliens/word', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`,
      },
      body: JSON.stringify({ name: word }),
    })
      .then((resp) => {
        if (resp.status === 201) {
          console.log('success');
          console.log(resp);
          return resp.json();
          // navigate('/');
        } else {
          console.log('Failure');
        }
      })
      .then((data) => {
        console.log(data);
        dispatch(login(data));
      });
  };

  return (
    <div>
      <h1 className="center">Log In</h1>
      {console.log(user + '\n' + authToken)}

      <Form onSubmit={(e) => handleLogin(e)}>
        <Form.Label htmlFor="username">Username</Form.Label>
        <Form.Control
          type="text"
          id="username"
          name="username"
          value={username}
          required=""
          onChange={(e) => handleChange(e)}
        />

        <Form.Label htmlFor="password">Password</Form.Label>
        <Form.Control
          type="password"
          id="password"
          name="password"
          value={password}
          required=""
          onChange={(e) => handleChange(e)}
        />
      </Form>

      <div>
        <Button type="submit" onClick={(e) => handleLogin(e)}>
          Login
        </Button>
      </div>

      <div>
        <Button className="container" onClick={(e) => handleCreate(e)}>
          Create Account
        </Button>
      </div>
      <div>
        <Button className="container" onClick={(e) => addWord('Wah gwan2')}>
          Add Word
        </Button>
      </div>
    </div>
  );
}

export default Login;

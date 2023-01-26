import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setFormType } from '../store/slices/AuthSlice';
import { login } from '../store/slices/AuthSlice.js';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../css/Login.css';

// add messaging

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //Components state.
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  //Redux's state.
  const user = useSelector((state) => state.auth.user);
  const authToken = useSelector((state) => state.auth.authToken);
  const formLogInType = useSelector((state) => state.auth.formLogInType);

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
        } else {
          console.log('Failure');
        }
      })
      .then((data) => {
        console.log(data);
        // setting the global state
        dispatch(login(data));
        navigate('/');
      });
  };

  return (
    <div className="log-in-container">
      <h1 className="log-in-header">
        {formLogInType === 'log in' ? 'LOG IN' : 'SIGN UP'}
      </h1>
      {console.log(user + '\n' + authToken)}

      <Form onSubmit={(e) => handleLogin(e)} style={{ paddingBottom: '2em' }}>
        <Form.Label htmlFor="username">Username</Form.Label>
        <Form.Control
          type="text"
          id="username"
          name="username"
          value={username}
          required=""
          onChange={(e) => handleChange(e)}
        />

        <Form.Label htmlFor="password" style={{ paddingTop: '2em' }}>
          Password
        </Form.Label>
        <Form.Control
          type="password"
          id="password"
          name="password"
          value={password}
          required=""
          onChange={(e) => handleChange(e)}
        />
      </Form>

      {formLogInType === 'log in' ? (
        <div>
          <Button
            variant="secondary"
            type="submit"
            onClick={(e) => handleLogin(e)}
          >
            Login
          </Button>
        </div>
      ) : null}

      {formLogInType === 'sign up' ? (
        <div>
          <Button
            variant="secondary"
            className="submit"
            onClick={(e) => handleCreate(e)}
          >
            Create Account
          </Button>
        </div>
      ) : null}
    </div>
  );
}

export default Login;

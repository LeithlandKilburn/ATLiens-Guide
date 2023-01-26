import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setFormType } from '../store/slices/AuthSlice';
import { login } from '../store/slices/AuthSlice.js';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../css/Login.css';
import { User, Lock } from 'react-feather';

// add messaging

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //Components state.
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

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
          setError('Invalid username or password.');
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
      <div className="log-in-header">
        <h1>{formLogInType === 'log in' ? 'Log In' : 'Sign Up'}</h1>
      </div>
      {console.log(user + '\n' + authToken)}

      {/* && is used to check if the expression on the left side of it is truthy, and if it is, it returns the expression on the right side of it. If the left side is falsy, it returns the left side. */}
      <div className="log-in-error-container">
        {error !== '' && <p className="log-in-error">{error}</p>}
      </div>

      <Form onSubmit={(e) => handleLogin(e)} style={{ paddingBottom: '2em' }}>
        {/* <Form.Label
          htmlFor="username"
          style={{ paddingTop: '1em', fontSize: '25px' }}
        >
          Username
        </Form.Label>
        <Form.Control
          type="text"
          id="username"
          name="username"
          value={username}
          required=""
          onChange={(e) => handleChange(e)}
        /> */}

        <InputGroup size="lg" style={{ paddingTop: '2em' }}>
          <InputGroup.Text id="inputGroup-sizing-lg">
            <User />
          </InputGroup.Text>
          <Form.Control
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
            type="text"
            id="username"
            name="username"
            value={username}
            placeholder="Enter Your Username"
            required=""
            onChange={(e) => handleChange(e)}
          />
        </InputGroup>

        <InputGroup size="lg" style={{ paddingTop: '2em' }}>
          <InputGroup.Text id="inputGroup-sizing-lg">
            <Lock />
          </InputGroup.Text>
          <Form.Control
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
            type="password"
            id="password"
            name="password"
            value={password}
            placeholder="Enter Your Password"
            required=""
            onChange={(e) => handleChange(e)}
          />
        </InputGroup>

        {/* <Form.Label
          htmlFor="password"
          style={{ paddingTop: '1em', fontSize: '25px' }}
        >
          Password
        </Form.Label>
        <Form.Control
          type="password"
          id="password"
          name="password"
          value={password}
          required=""
          onChange={(e) => handleChange(e)}
        /> */}
      </Form>

      {formLogInType === 'log in' ? (
        <div>
          <Button variant="dark" type="submit" onClick={(e) => handleLogin(e)}>
            Login
          </Button>
        </div>
      ) : null}

      {formLogInType === 'sign up' ? (
        <div>
          <Button
            variant="dark"
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

import React, { useState } from 'react';
import axios from "axios";
import {
  TextField,
  Button,
  Snackbar
} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { Link } from 'react-router-dom';
import './SignUpStyles.css';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function SignUp() {
  const regexpLogin = /.{6,}/;
  const regexpPassword = /(?=.*[0-9])[A-Za-z0-9]{5,}/;
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const [openError, setError] = React.useState(false);
  const [errorText, setErrorText] = useState(false);
  const [alert, setAlert] = useState('');

  const handleClick = () => {
    setError(true);
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setError(false);
  }

  const registerUser = async () => {
    try {
      const res = await axios.post('http://localhost:8000/createUser', {
        login,
        password,
      });
      setAlert('success');
      setErrorText('Пользователь зарегистрирован!');
      setError(true);
    } catch (e) {
      setAlert('error');
      setErrorText('Такой пользователь уже существует!');
      setError(true);
    }
  }

  const checkUser = () => {
    if (password !== passwordRepeat) {
      setAlert('error');
      setErrorText('Пароли не совпадают!');
      setError(true);
    } else if (password.match(regexpPassword) === null) {
      setAlert('error');
      setErrorText(`
                Пароль должен содержать:
                - длину строки, не менее 6 символов; 
                - только латинские символы; 
                - хотя бы 1 число.`);
      setError(true);
    } else if (login.match(regexpLogin) === null) {
      setAlert('error');
      setErrorText('Логин слишком короткий! *(требуется не менее 6 символов)');
      setError(true);
    } else {
      registerUser();
    }
    setLogin('');
    setPassword('');
    setPasswordRepeat('');
  }

  return (
    <div className="sign-up">
      <h2 className='header-text'>
        Регистрация
      </h2>
      <div className='input-fields'>
        <div className='login'>
          <p>Login:</p>
          <TextField
            type='text'
            id='outlined-basic'
            className='login-input'
            variant='outlined'
            placeholder='Login'
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
        </div>
        <div className='password'>
          <p>Password:</p>
          <TextField
            id="outlined-basic"
            type="password"
            autoComplete="current-password"
            className='password-input'
            variant="outlined"
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className='password'>
          <p>Repeat password:</p>
          <TextField
            id="outlined-basic"
            type="password"
            autoComplete="current-password"
            className='password-input'
            variant="outlined"
            placeholder='Repeat password'
            value={passwordRepeat}
            onChange={(e) => setPasswordRepeat(e.target.value)}
          />
        </div>
        <div className='buttons'>
          <Button
            className='register-btn'
            variant="outlined"
            disabled={!login || !password || !passwordRepeat}
            onClick={() => {
              checkUser();
              }
            }
          >
            Зарегистрироваться
          </Button>
          <Link to='/signIn'>
            <Button
              className='authorization-btn'
              >
              Авторизоваться
            </Button>
          </Link>
          <Snackbar
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={openError}
            autoHideDuration={6000}
            onClose={handleClose}
          >
            <Alert severity={alert}>{errorText}</Alert>
          </Snackbar>
        </div>
      </div>
    </div>
  );
}

export default SignUp;

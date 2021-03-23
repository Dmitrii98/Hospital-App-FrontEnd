import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from "axios";
import {
  TextField,
  Button,
  Snackbar
} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import './SignIn.css';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function SignIn() {
  let history = useHistory();
  const regexpLogin = /.{6,}/;
  const regexpPassword = /(?=.*[0-9])[A-Za-z0-9]{5,}/;
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
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

  const loginUser = async () => {
    try {
      const res = await axios.post('http://localhost:8000/loginUser', {
        login,
        password,
      });
      localStorage.setItem('user', res.data);
      history.push('/main');
      window.location.reload();
    } catch (e) {
      setAlert('error');
      setErrorText('Данные введены неверно!');
      setError(true);
    }
  }

  const checkUser = () => {
    if ((password.match(regexpPassword) === null) || (login.match(regexpLogin) === null)) {
      setAlert('error');
      setErrorText(`Логин или пароль введены неверно!`);
      setError(true);
    } else {
      loginUser();
    }
  }

  return (
    <div className="sign-in">
      <h2 className='header-text'>
        Авторизация
      </h2>
      <div className='input-fields'>
        <p className='login-p'>Login:</p>
        <TextField
          type='text'
          id='outlined-basic'
          className='login-input'
          variant='outlined'
          placeholder='Login'
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
        <p className='password-p'>Password:</p>
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
        <div className='enter-btn-div'>
          <Button
            className='enter-btn'
            variant="outlined"
            disabled={!login || !password}
            onClick={() => {
              checkUser();
            }
            }
          >
            Войти
          </Button>
        </div>
        <div className='sign-up-btn-div'>
        <Link to='/signUp'>
          <Button
            className='sign-up-btn'
          >
            Зарегистрироваться
          </Button>
        </Link>
        </div>
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
  );
}

export default SignIn;

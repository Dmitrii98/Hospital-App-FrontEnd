import React from 'react';
import {
  TextField,
  Button,
  Snackbar
} from '@material-ui/core';
import {Link} from 'react-router-dom';
import SignInStyles from './SignIn.css';

function SignIn() {
  return (
    <div className="sign-in">
      <h2 className='header-text'>
        Авторизация
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
          />
        </div>
        <div className='buttons'>
          <Button
            className='enter-btn'
            variant="outlined"
          >
            Войти
          </Button>
          <Link to='/signUp'>
            <Button
              className='sign-up-btn'
              >
              Зарегистрироваться
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignIn;

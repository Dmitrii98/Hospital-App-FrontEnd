import React from 'react';
import {
  TextField,
  Button
} from '@material-ui/core';
import SignUpStyles from './SignUpStyles.css';

function SignUp() {
  return (
    <div className="sign-up">
      <h2 className='header-text'>
        Регистрация
      </h2>
      <div className='input-fields'>
        <div className='login'>
          <p>Login:</p>
          <TextField
            id="outlined-basic"
            className='login-input'
            variant="outlined"
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
        <div className='password'>
          <p>Repeat password:</p>
          <TextField
            id="outlined-basic"
            type="password"
            autoComplete="current-password"
            className='password-input'
            variant="outlined"
            placeholder='Repeat password'
          />
        </div>
        <div className='buttons'>
          <Button
            className='register-btn'
            variant="outlined"
          >
            Зарегистрироваться
          </Button>
          <Button className='authorization-btn'>Авторизоваться</Button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;

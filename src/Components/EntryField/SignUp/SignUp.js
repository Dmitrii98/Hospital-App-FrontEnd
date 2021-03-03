import React, {useState} from 'react';
import axios from "axios";
import {
  TextField,
  Button,
  Snackbar
} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import SignUpStyles from './SignUpStyles.css';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function SignUp() {
  const [user, setUser] = useState([]);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  }

  const registerUser = async () => {
    await axios.post('http://localhost:8000/createUser', {
      login,
      password
    }).then(res => {
      setLogin('');
      setPassword('');
      setPasswordRepeat('');
      setUser(res.data.data);
    })
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
            onClick={() => {
              if (password === passwordRepeat) {
                registerUser();
              } else {
                setPassword('');
                setPasswordRepeat('');
                setOpen(true);
                }
              }
            }
          >
            Зарегистрироваться
          </Button>
          <Button className='authorization-btn'>Авторизоваться</Button>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert severity="error">Пароли не совпадают</Alert>
          </Snackbar>
        </div>
      </div>
    </div>
  );
}

export default SignUp;

import React from 'react';
import Header from "../Header/Header";
import { useHistory } from 'react-router-dom';
import {
  Button
} from '@material-ui/core';
import './MainStyles.css';

function Main() {
  const history = useHistory();

  const logOut = () =>{
    localStorage.removeItem('user')
    history.push('/singIn')
  }

  return (
    <div className="main">
      <Header name='Вы вошли в систему'>
        <Button
          className='logout-btn'
          onClick={() => logOut()}
          >
          Выйти
        </Button>
      </Header>
    </div>
  );
}

export default Main;

import React from 'react';
import { Container, AppBar } from '@material-ui/core';
import Header from "../Header/Header";
import Wrapper from "../Wrapper/Wrapper";
import RegisterStyles from './RegisterStyles.css';

function Register() {
  return (
    <div className="main">
          <Header name='Зарегистрироваться в системе'/>
          <Wrapper/>
    </div>
  );
}

export default Register;
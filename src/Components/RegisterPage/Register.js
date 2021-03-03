import React from 'react';
import { Container, AppBar } from '@material-ui/core';
import RegisterStyles from './RegisterStyles.css'
import Header from "../Header/Header";
import Wrapper from "../Wrapper/Wrapper";

function Register() {
  return (
    <div className="main">
          <Header name='Зарегистрироваться в системе'/>
          <Wrapper/>
    </div>
  );
}

export default Register;

import React from 'react';
import Header from "../Header/Header";
import Wrapper from "../Wrapper/Wrapper";
import LoginStyles from './Login.css';

function Login() {
  return (
    <div className="main">
      <Header name='Авторизоваться в системе'/>
      <Wrapper/>
    </div>
  );
}

export default Login;

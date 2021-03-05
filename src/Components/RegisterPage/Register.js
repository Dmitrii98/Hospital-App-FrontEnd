import React from 'react';
import Header from "../Header/Header";
import Wrapper from "../Wrapper/Wrapper";
import './RegisterStyles.css';

function Register() {
  return (
    <div className="main">
      <Header name='Зарегистрироваться в системе'/>
      <Wrapper/>
    </div>
  );
}

export default Register;

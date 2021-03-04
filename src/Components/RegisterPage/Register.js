import React from 'react';
import Header from "../Header/Header";
import Wrapper from "../Wrapper/Wrapper";
import RegisterStyles from './RegisterStyles.css';
import SignUp from "../EntryField/SignUp/SignUp";
import SignIn from "../EntryField/SignIn/SignIn";

function Register() {
  return (
    <div className="main">
      <Header name='Зарегистрироваться в системе'/>
      <Wrapper/>
    </div>
  );
}

export default Register;

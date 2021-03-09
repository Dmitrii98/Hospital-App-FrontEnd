import React from 'react';
import Header from "../Header/Header";
import InputField from "./InputField/InputField";
import {useHistory} from 'react-router-dom';
import {
  Button
} from '@material-ui/core';
import './MainStyles.css';
import Appointment from "./Appointments/Appointment";

function Main() {
  const history = useHistory();

  const logOut = () => {
    localStorage.removeItem('user')
    history.push('/singIn')
    window.location.reload();
  }

  return (
    <div className="main">
      <Header name='Приемы'>
        <Button
          className='logout-btn'
          onClick={() => logOut()}
          >
          Выйти
        </Button>
      </Header>
      <InputField/>
      <Appointment/>
    </div>
  );
}

export default Main;

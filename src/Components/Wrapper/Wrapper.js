import React from 'react';
import EntryField from "../EntryField/EntryField";
import logoWrapper from './img/logo_wrapper.png';
import './WrapperStyles.css';

function Wrapper() {
  return (
    <div className="wrapper">
      <img className='logo-wrapper' src={logoWrapper} alt="logoWrapper"/>
      <EntryField/>
    </div>
  );
}

export default Wrapper;

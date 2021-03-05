import React from 'react';
import './InputFieldStyles.css';
import {Button, TextField} from "@material-ui/core";

function InputField() {
  return (
    <div className="main">
      <div className='input-field'>
        <div className='item-input'>
          <p>Имя:</p>
          <TextField
            type='text'
            id='outlined-basic'
            className='input'
            variant='outlined'
          />
        </div>
        <div className='item-input'>
          <p>Врач:</p>
          <TextField
            type='text'
            id='outlined-basic'
            className='input'
            variant='outlined'
          />
        </div>
        <div className='item-input'>
          <p>Дата:</p>
          <TextField
            type='text'
            id='outlined-basic'
            className='input'
            variant='outlined'
          />
        </div>
        <div className='item-input'>
          <p>Жалобы:</p>
          <TextField
            type='text'
            id='outlined-basic'
            className='input'
            variant='outlined'
          />
        </div>
        <Button
          className='add-btn'
          >
          Добавить
        </Button>
      </div>
    </div>

  );
}

export default InputField;

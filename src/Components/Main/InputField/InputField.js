import React, {useState} from 'react';
import axios from "axios";
import {
  Button,
  MenuItem,
  TextField
} from '@material-ui/core';
import './InputFieldStyles.css';

function InputField() {
  const [fullName, setFullName] = useState('');
  const [doctor, setDoctor] = useState([]);
  const [date, setDate] = useState('');
  const [complaint, setComplaint] = useState('');

  const doctors = [
    {name: "Доктор Курпатов"},
    {name: "Доктор Стравинский"},
    {name: "Доктор Хаус"},
    {name: "Доктор Стрэндж"},
    {name: "Доктор Дулиттл"},
    {name: "Доктор Сон"},
  ];

  const addNewAppointment = async () => {
    await axios.post('http://localhost:8000/createAppointment', {
      fullName,
      doctor,
      date,
      complaint
    }).then(res => {
      setFullName('');
      setDoctor('');
      setDate('');
      setComplaint('');
    });
  }
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
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className='item-input'>
          <p>Врач:</p>
          <TextField
            id="input-doctor"
            className='input'
            select
            type='text'
            value={doctor}
            onChange={(e) => setDoctor(e.target.value)}
            variant="outlined"
            size="small"
          >
            {doctors.map(doctor => (
              <MenuItem value={doctor.name}>
                {doctor.name}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <div className='item-input'>
          <p>Дата:</p>
          <TextField
            type='date'
            id='outlined-basic'
            className='input'
            variant='outlined'
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className='item-input'>
          <p>Жалобы:</p>
          <TextField
            type='text'
            id='outlined-basic'
            className='input'
            variant='outlined'
            value={complaint}
            onChange={(e) => setComplaint(e.target.value)}
          />
        </div>
        <div>
          <Button
            className='add-btn'
            variant="outlined"
            disabled={!fullName || !doctor || !date || !complaint}
            onClick={() =>
              addNewAppointment()
            }
          >
            Добавить
          </Button>
        </div>
      </div>
    </div>
  );
}

export default InputField;

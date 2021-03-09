import React, {useState} from 'react';
import axios from "axios";
import Appointment from "../Appointments/Appointment";
import {
  Button,
  MenuItem,
  InputBase,
  Select,
  TextField
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import './InputFieldStyles.css';

const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(),
    },
  },
  input: {
    width: '15.2vw',
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid rgba(0, 0, 0, 0.23)',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#3f51b5',
      backgroundColor: '#fff',
    },
  },
}))(InputBase);

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
        <div className='btn'>
          <Button
            className='add-btn'
            variant="outlined"
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

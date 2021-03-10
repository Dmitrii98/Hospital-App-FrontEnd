import React, { useState } from 'react';
import axios from "axios";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
  TextField
} from '@material-ui/core';
import './ModalEditStyles.css';

function ModalEdit(
  {
    open,
    close,
    appointments
  }) {
  const [editName, setEditName] = useState(appointments.fullName);
  const [editDoctor, setEditDoctor] = useState(appointments.doctor);
  const [editDate, setEditDate] = useState(appointments.date);
  const [editComplaint, setEditComplaint] = useState(appointments.complaint);

  const doctors = [
    {name: "Доктор Курпатов"},
    {name: "Доктор Стравинский"},
    {name: "Доктор Хаус"},
    {name: "Доктор Стрэндж"},
    {name: "Доктор Дулиттл"},
    {name: "Доктор Сон"},
  ];

  const editAppointment = async () => {
    await axios.patch(`http://localhost:8000/updateAppointment`, {
        _id: appointments._id,
        fullName: editName,
        doctor: editDoctor,
        date: editDate,
        complaint: editComplaint
      },
    ).then(() => {
      close();
    });
  }

  return (
    <div className="Modal">
      <Dialog
        open={open}
        onClose={() => close()}
        aria-labelledby="form-dialog-title"
        className='dialog'
      >
        <DialogTitle id="form-dialog-title">Изменить прием <hr/></DialogTitle>
        <DialogContent>
          <p className='name'>Имя:</p>
          <TextField
            id="name"
            variant='outlined'
            type="text"
            className='fullName-input'
            value={editName || appointments.fullName}
            onChange={(e) => setEditName(e.target.value)}
          />
          <p className='doctor'>Доктор:</p>
          <TextField
            id="input-doctor"
            className='doctor-input'
            select
            type='text'
            value={editDoctor || appointments.doctor}
            onChange={(e) => setEditDoctor(e.target.value)}
            variant="outlined"
            size="small"
          >
            {doctors.map(doctor => (
              <MenuItem value={doctor.name}>
                {doctor.name}
              </MenuItem>
            ))}
          </TextField>
          <p className='date'>Дата:</p>
          <TextField
            id="name"
            variant='outlined'
            type="date"
            className='date-input'
            value={editDate || appointments.date}
            onChange={(e) => setEditDate(e.target.value)}
          />
          <p className='complaint'>Жалобы:</p>
          <TextField
            id="name"
            variant='outlined'
            type="text"
            className='complaint-input'
            value={editComplaint || appointments.complaint}
            onChange={(e) => setEditComplaint(e.target.value)}
          />
          <hr/>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => close()}
            variant="outlined"
            className='cancel-btn'
          >
            Cancel
          </Button>
          <Button
            className='save-btn'
            variant="outlined"
            onClick={() => editAppointment()}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ModalEdit;

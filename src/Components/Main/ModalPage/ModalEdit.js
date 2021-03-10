import React from 'react';
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

function ModalEdit(props) {

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
      _id: props.appointments[props.indexEdit]._id,
      fullName: props.fullName,
      doctor: props.doctor,
      date: props.date,
      complaint: props.complaint
      },
    ).then(res => {
      props.setAppointments(res.data.data);
      props.setIndexEdit(-1);
      props.close();
    });
  }

  return (
    <div className="Modal">
      <Dialog
        open={props.open}
        onClose={props.open}
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
            value={props.fullName}
            onChange={(e) => props.fullNameEdit(e.target.value)}
          />
          <p className='doctor'>Доктор:</p>
          <TextField
            id="input-doctor"
            className='doctor-input'
            select
            type='text'
            value={props.doctor}
            onChange={(e) => props.doctorEdit(e.target.value)}
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
            value={props.date}
            onChange={(e) => props.dateEdit(e.target.value)}
          />
          <p className='complaint'>Жалобы:</p>
          <TextField
            id="name"
            variant='outlined'
            type="text"
            className='complaint-input'
            value={props.complaint}
            onChange={(e) => props.complaintEdit(e.target.value)}
          />
          <hr/>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => props.close()}
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

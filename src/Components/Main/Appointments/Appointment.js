import React, {useEffect, useState} from 'react';
import axios from "axios";
import {
  IconButton,
  Modal,
  Backdrop,
  Fade,
  AppBar,
  Toolbar,
  Typography,
  TextField
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';
import './AppointmentStyles.css';

function Appointment() {
  const [appointments, setAppointments] = useState([]);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(async () => {
    await axios.get('http://localhost:8000/allAppointments').then(res => {
      setAppointments(res.data.data);
    })
  })

  const deleteItem = async (index) => {
    await axios.delete(`http://localhost:8000/deleteAppointment?id=${appointments[index]._id}`,
    ).then(res => {
      setAppointments(res.data.data);
    })
  }

  return (
    <div className="appointment">
      <div className='all-appointments'>
        <Table striped bordered hover>
          <thead>
          <tr>
            <th>Имя</th>
            <th>Врач</th>
            <th>Дата</th>
            <th>Жалобы</th>
            <th></th>
          </tr>
          </thead>
          {appointments.map((item, index) => (
            <tbody>
            <tr>
              <td>{item.fullName}</td>
              <td>{item.doctor}</td>
              <td>{item.date}</td>
              <td>{item.complaint}</td>
              <td className='btns'>
                <IconButton aria-label="delete" onClick={() => deleteItem(index)}>
                  <DeleteIcon/>
                </IconButton>
                <IconButton aria-label="edit" onClick={handleOpen}>
                  <EditOutlinedIcon/>
                </IconButton>
              </td>
            </tr>
            </tbody>
          ))}
        </Table>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          className='opened-modal'
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className='paper'>
              <AppBar className='modal-appBar' position="static">
                <Toolbar>
                  <h2 className='modal-header'>Изменить прием</h2>
                </Toolbar>
              </AppBar>
            </div>
          </Fade>
        </Modal>
      </div>
    </div>
  );
}

export default Appointment;

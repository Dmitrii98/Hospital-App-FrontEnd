import React, {useEffect, useState} from 'react';
import axios from "axios";
import ModalEdit from "../ModalPage/ModalEdit";
import {
  IconButton,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import Table from 'react-bootstrap/Table';
import './AppointmentStyles.css';

function Appointment() {
  const [appointments, setAppointments] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [indexEdit, setIndexEdit] = useState(-1);
  const [editName, setEditName] = useState('');
  const [editDoctor, setEditDoctor] = useState('');
  const [editDate, setEditDate] = useState('');
  const [editComplaint, setEditComplaint] = useState('');

  const handleClickOpen = (index) => {
    setIndexEdit(index);
    setEditName(appointments[index].fullName);
    setEditDoctor(appointments[index].doctor);
    setEditDate(appointments[index].date);
    setEditComplaint(appointments[index].complaint);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(async () => {
    await axios.get('http://localhost:8000/allAppointments').then(res => {
      setAppointments(res.data.data);
    });
  })

  const deleteItem = async (index) => {
    await axios.delete(`http://localhost:8000/deleteAppointment?id=${appointments[index]._id}`,
    ).then(res => {
      setAppointments(res.data.data);
    });
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
                <IconButton aria-label="edit" onClick={() => handleClickOpen(index)}>
                  <EditOutlinedIcon/>
                </IconButton>
              </td>
            </tr>
            <ModalEdit
              open={open}
              close={handleClose}
              fullName={editName}
              fullNameEdit={setEditName}
              doctor={editDoctor}
              doctorEdit={setEditDoctor}
              date={editDate}
              dateEdit={setEditDate}
              complaint={editComplaint}
              complaintEdit={setEditComplaint}
              appointments={appointments}
              setAppointments={setAppointments}
              indexEdit={indexEdit}
              setIndexEdit={setIndexEdit}
            />
            </tbody>
          ))}
        </Table>
      </div>
    </div>
  );
}

export default Appointment;

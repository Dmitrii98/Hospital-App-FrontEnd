import React, {useEffect, useState} from 'react';
import axios from "axios";
import ModalEdit from "../ModalPage/ModalEdit";
import Sort from "../Sort/Sort";
import {
  IconButton,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import Table from 'react-bootstrap/Table';
import './AppointmentStyles.css';
import ModalDelete from "../ModalPageDelete/ModalDelete";

function Appointment() {
  const [appointments, setAppointments] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [openDelete, setOpenDelete] = React.useState(false);
  const [indexEdit, setIndexEdit] = useState(-1);
  const [editName, setEditName] = useState('');
  const [editDoctor, setEditDoctor] = useState('');
  const [editDate, setEditDate] = useState('');
  const [editComplaint, setEditComplaint] = useState('');
  const [sort, setSort] = useState('');
  const [sortType, setSortType] = useState('По возрастанию');

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

  const handleClickOpenDelete = (index) => {
    setIndexEdit(index);
    setOpenDelete(true);
  };

  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

  useEffect(async () => {
    await axios.get('http://localhost:8000/allAppointments').then(res => {
      setAppointments(res.data.data);
    });
  })

  const sortFunc = (a, b) => {
    if (sortType === 'По убыванию') {
      if (sort === 'Имени') {
        if (a.fullName < b.fullName) {
          return 1;
        } else {
          return -1;
        }
      } else if (sort === 'Врачам') {
        if (a.doctor < b.doctor) {
          return 1;
        } else {
          return -1;
        }
      } else if (sort === 'Дате') {
        if (a.date < b.date) {
          return 1;
        } else {
          return -1;
        }
      }
    } else {
      if (sort === 'Имени') {
        if (a.fullName > b.fullName) {
          return 1;
        } else {
          return -1;
        }
      } else if (sort === 'Врачам') {
        if (a.doctor > b.doctor) {
          return 1;
        } else {
          return -1;
        }
      } else if (sort === 'Дате') {
        if (a.date > b.date) {
          return 1;
        } else {
          return -1;
        }
      }
    }
  }

  return (
    <div className="appointment">
      <hr/>
      <Sort
        appointments={appointments}
        setAppointments={setAppointments}
        sort={sort}
        setSort={setSort}
        sortType={sortType}
        setSortType={setSortType}
      />
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
          {appointments.sort(sortFunc).map((item, index) => (
            <tbody>
            <tr>
              <td>{item.fullName}</td>
              <td>{item.doctor}</td>
              <td>{item.date}</td>
              <td>{item.complaint}</td>
              <td className='btns'>
                <IconButton aria-label="delete" onClick={() => handleClickOpenDelete(index)}>
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
            <ModalDelete
              close={handleCloseDelete}
              open={openDelete}
              indexEdit={indexEdit}
              setIndexEdit={setIndexEdit}
              appointments={appointments}
              setAppointments={setAppointments}
            />
            </tbody>
          ))}
        </Table>
      </div>
    </div>
  );
}

export default Appointment;

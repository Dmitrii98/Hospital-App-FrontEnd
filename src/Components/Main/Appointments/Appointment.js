import React, {useEffect, useState} from 'react';
import Table from 'react-bootstrap/Table';
import axios from "axios";
import {IconButton} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import Sort from "../Sort/Sort";
import ModalEdit from "../ModalPage/ModalEdit";
import ModalDelete from "../ModalPageDelete/ModalDelete";
import './AppointmentStyles.css';

function Appointment() {
  const [appointments, setAppointments] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [openDelete, setOpenDelete] = React.useState(false);
  const [indexEdit, setIndexEdit] = useState(-1);
  const [sort, setSort] = useState('');
  const [sortType, setSortType] = useState('По возрастанию');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [startFilter, setStartFilter] = useState(false);

  const handleClickOpen = (index) => {
    setIndexEdit(index);
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

  const filterByDate = ((item) => {
      if (startFilter) {
        const minDate = startDate;
        const maxDate = endDate;
        if ((item.date >= minDate) && (item.date <= maxDate)) {
          return true;
        }
      }
    }
  )

  const filterFun = () => {
    return startFilter
      ? appointments.filter(filterByDate).sort(sortFunc)
      : appointments.sort(sortFunc)
  }

  const filterAppointment = filterFun();

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
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
        startFilter={startFilter}
        setStartFilter={setStartFilter}
      />
      <div className='all-appointments'>
        <div className='table-scroll '>
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
            {filterAppointment.map((item, index) => (
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
                appointments={appointments[indexEdit] || {}}
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
            ))
            }
          </Table>
        </div>
      </div>
    </div>
  );
}

export default Appointment;
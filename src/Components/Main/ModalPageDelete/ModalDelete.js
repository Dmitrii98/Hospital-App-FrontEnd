import React from 'react';
import axios from "axios";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle
} from '@material-ui/core';
import './ModalDeleteStyles.css';

function ModalDelete(
  {
    close,
    open,
    indexEdit,
    setIndexEdit,
    appointments,
    setAppointments
  }) {
  const deleteItem = async () => {
    await axios.delete(`http://localhost:8000/deleteAppointment?id=${appointments[indexEdit]._id}`,
    ).then(res => {
      setAppointments(res.data.data);
      setIndexEdit(-1);
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
        <DialogTitle id="form-dialog-title">Удалить прием <hr/></DialogTitle>
        <DialogContent>
          <p className='text'>Вы действительно хотите удалить прием?</p>
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
            className='delete-btn'
            variant="outlined"
            onClick={() => deleteItem()}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ModalDelete;

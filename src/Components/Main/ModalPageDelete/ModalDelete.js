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
import './ModalDeleteStyles.css';

function ModalDelete(props) {

  const deleteItem = async () => {
    await axios.delete(`http://localhost:8000/deleteAppointment?id=${props.appointments[props.indexEdit]._id}`,
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
        <DialogTitle id="form-dialog-title">Удалить прием <hr/></DialogTitle>
        <DialogContent>
          <p className='text'>Вы действительно хотите удалить прием?</p>
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

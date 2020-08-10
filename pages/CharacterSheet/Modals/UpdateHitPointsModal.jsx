import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import LocalPizzaIcon from '@material-ui/icons/LocalPizza';
import TextField from '@material-ui/core/TextField';
import InputBase from '@material-ui/core/InputBase';
import Grid from '@material-ui/core/Grid';
import {
  useCharacterState,
  useSetCharacterState,
} from '../Context/CharacterContext';

const UpdateHitPointsModal = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Chip
        label={<LocalPizzaIcon color="action" fontSize="small" />}
        size="small"
        style={{
          paddingTop: 3, marginTop: -7, width: 25,
        }}
        onClick={handleOpen}
      />
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
      >
        <Fade in={open}>
          <div>
            <h2 id="transition-modal-title">Transition modal</h2>
            <p id="transition-modal-description">react-transition-group animates me.</p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default UpdateHitPointsModal;

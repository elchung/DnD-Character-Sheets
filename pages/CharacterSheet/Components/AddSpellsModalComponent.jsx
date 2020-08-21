import Backdrop from '@material-ui/core/Backdrop';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Modal from '@material-ui/core/Modal';
import Divider from '@material-ui/core/Divider';
import React from 'react';
import FormLabel from '@material-ui/core/FormLabel';
import Paper from '@material-ui/core/Paper';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import {
  useCharacterState,
  useSetCharacterState,
} from '../../../Context/CharacterContext';

const AddSpellsModalComponent = () => {
  const {} = useCharacterState();
  const {} = useSetCharacterState();
  const [open, setOpen] = React.useState(false);
  const [healOrDamage, setHealOrDamage] = React.useState('damage');
  const [healType, setHealType] = React.useState('main');
  const [amount, setAmount] = React.useState(0);
  const [damageType, setDamageType] = React.useState('');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton
        onClick={handleOpen}
        style={{
          marginRight: -25, marginTop: -18,
        }}
      >
        <MenuBookIcon
          color="action"
          fontSize="small"
          size="small"
        />
      </IconButton>
      <Modal
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
        aria-describedby="transition-modal-description"
        aria-labelledby="transition-modal-title"
        closeAfterTransition
        onClose={handleClose}
        open={open}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <Fade in={open}>
          <Paper style={{ padding: 20 }}>
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              centered
            >
              <Tab label="Item One" />
              <Tab label="Item Two" />
              <Tab label="Item Three" />
            </Tabs>
          </Paper>
        </Fade>
      </Modal>
    </div>
  );
};

export default AddSpellsModalComponent;

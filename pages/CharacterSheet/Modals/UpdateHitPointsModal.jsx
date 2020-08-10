import Backdrop from '@material-ui/core/Backdrop';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import Fade from '@material-ui/core/Fade';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Modal from '@material-ui/core/Modal';
import Divider from '@material-ui/core/Divider';
import React from 'react';
import FormLabel from '@material-ui/core/FormLabel';
import Paper from '@material-ui/core/Paper';
import LocalPizzaIcon from '@material-ui/icons/LocalPizza';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import {
  useCharacterState,
  useSetCharacterState,
} from '../../Context/CharacterContext';


const UpdateHitPointsModal = () => {
  const {
    currentHP,
    tempHP,
    hitPointHistory,
    damageTypes,
    style,
  } = useCharacterState();
  const {
    setCurrentHP,
    setTempHP,
    setHitPointHistory,
  } = useSetCharacterState();
  const [open, setOpen] = React.useState(false);
  const [healOrDamage, setHealOrDamage] = React.useState('damage');
  const [tempOrMain, setTempOrMain] = React.useState('main');
  const [amount, setAmount] = React.useState(0);
  const [damageType, setDamageType] = React.useState("")

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleHealDamageChange = (event) => {
    setHealOrDamage(event.target.value);
  };

  const handleHealTypeChange = (event) => {
    setTempOrMain(event.target.value);
  };

  const handleDamageTypeChange = (event) => {
    setDamageType(event.target.value);
  };

  const handleCancel = () => {
    setOpen(false);
    setHealOrDamage('damage');
    setTempOrMain('main');
    setDamageType('');
  };

  const handleSubmit = () => {
    if damage, deal damage to temp then
  };

  return (
    <div>
      <Chip
        label={<LocalPizzaIcon color="action" fontSize="small" />}
        onClick={handleOpen}
        size="small"
        style={{
          paddingTop: 3, marginTop: -7, width: 25,
        }}
      />
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
            <Grid container direction="column">
              <Grid container direction="row" item>
                <Grid item>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">+/-</FormLabel>
                    <RadioGroup onChange={handleHealDamageChange} value={healOrDamage}>
                      <FormControlLabel control={<Radio color="primary" />} label="Damage" value="damage" />
                      <FormControlLabel control={<Radio color="primary" />} label="Heal" value="heal" />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid item>
                  <Divider orientation="vertical" />
                </Grid>
                <Grid item style={{ paddingLeft: 20, paddingRight: 20 }}>
                  <FormControl component="fieldset" disabled={healOrDamage === 'damage'}>
                    <FormLabel component="legend">Heal Type</FormLabel>
                    <RadioGroup aria-label="healType" name="healType" onChange={handleHealTypeChange} value={tempOrMain}>
                      <FormControlLabel control={<Radio color="primary" />} label="Main" value="main" />
                      <FormControlLabel control={<Radio color="primary" />} label="Temp" value="temp" />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid item>
                  <Divider orientation="vertical" />
                </Grid>
                <Grid item style={{ paddingLeft: 20 }}>
                  <Typography color="textSecondary">Damage Type</Typography>
                  <Select
                    disabled={healOrDamage === 'heal'}
                    onChange={handleDamageTypeChange}
                    style={{ width: 150 }}
                    value={damageType}
                  >
                    {damageTypes.map((type) => (
                      <MenuItem key={`${type}-menu-item`} value={type}>{type.charAt(0).toUpperCase() + type.slice(1)}</MenuItem>
                    ))}
                  </Select>
                </Grid>
              </Grid>
              <Grid item style={{ paddingLeft: 20 }}>
                <TextField
                  color="secondary"
                  id="outlined-secondary"
                  onChange={(event) => { setAmount(event.target.value); }}
                  value={amount}
                  variant="outlined"
                />
              </Grid>
              <Grid item>
                <Grid container direction="row" justify="flex-end">
                  <Grid item>
                    <Button color="secondary" onClick={handleCancel}>Cancel</Button>
                  </Grid>
                  <Grid item>
                    <Button color="primary" onClick={handleSubmit}>Submit</Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Fade>
      </Modal>
    </div>
  );
};

export default UpdateHitPointsModal;

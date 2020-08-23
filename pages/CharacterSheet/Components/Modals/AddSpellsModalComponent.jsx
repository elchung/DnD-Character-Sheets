import Backdrop from '@material-ui/core/Backdrop';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import Modal from '@material-ui/core/Modal';
import React from 'react';
import Paper from '@material-ui/core/Paper';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import IconButton from '@material-ui/core/IconButton';
import Tabs from '@material-ui/core/Tabs';
import AppBar from '@material-ui/core/AppBar';
import TabPanel from '../Reusable/SpellTabPanel';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
// import {
//   useCharacterState,
//   useSetCharacterState,
// } from '../../../Context/CharacterContext';

const AddSpellsModalComponent = () => {
  // const { } = useCharacterState();
  // const { } = useSetCharacterState();
  const [open, setOpen] = React.useState(false);
  const [topTabNum, setTopTabNum] = React.useState(0);

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

  const handleTopTabChange = (event, newValue) => {
    setTopTabNum(newValue);
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
            <AppBar position="static">
              <Tabs value={topTabNum} onChange={handleTopTabChange} aria-label="top level tabs">
                <Tab label="Add Spell From List" />
                <Tab label="Add Custom spell" />
                <Tab label="Add Blank" />
              </Tabs>
            </AppBar>
            <TabPanel value={topTabNum} index={0}>
              <AddSpellsComponent />
            </TabPanel>
            <TabPanel value={topTabNum} index={1}>
              <AddCustomSpellComponent />
            </TabPanel>
            <TabPanel value={topTabNum} index={2}>
              <AddBlankSpellComponent />
            </TabPanel>
            <Grid container direction="row" justify="flex-end">
              <Grid item>
                <Button color="secondary" onClick={handleCancel}>Cancel</Button>
              </Grid>
              <Grid item>
                <Button color="primary" onClick={handleSubmit}>Submit</Button>
              </Grid>
            </Grid>
          </Paper>
        </Fade>
      </Modal>
    </div>
  );
};

export default AddSpellsModalComponent;
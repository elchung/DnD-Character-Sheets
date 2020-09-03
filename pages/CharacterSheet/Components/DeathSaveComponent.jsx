import Paper from '@material-ui/core/Paper';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import DeathSaveRadio from './Reusable/DeathSaveRadio';
import {
  useCharacterState,
  useSetCharacterState,
} from '../../Context/CharacterContext';

const DeathSaveComponent = () => {
  const { deathSaves, useStyles } = useCharacterState();
  const { setDeathSaves } = useSetCharacterState();
  const classes = useStyles();

  return (
    <Paper className={classes.deathSaveComponent} variant="outlined">
      <Typography align="center" color="textSecondary" className={classes.headerStyle}>Death Saves</Typography>
      <Typography align="center" color="textSecondary" className={classes.deathSaveSuccessText}>Successes</Typography>
      <DeathSaveRadio deathSaves={deathSaves} id="successes" setDeathSaves={setDeathSaves} />
      <Typography align="center" color="textSecondary" className={classes.deathSaveFailText}>Failures</Typography>
      <DeathSaveRadio deathSaves={deathSaves} id="failures" setDeathSaves={setDeathSaves} />
    </Paper>
  );
};

export default DeathSaveComponent;

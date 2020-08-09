import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import DeathSaveRadio from './DeathSaveRadio';
import {
  useCharacterState,
  useSetCharacterState,
} from '../Context/CharacterContext';

const DeathSaveComponent = () => {
  const { deathSaves, style } = useCharacterState();
  const { setDeathSaves } = useSetCharacterState();

  return (
    <Paper variant="outlined" style={style.deathSaveComponent}>
      <Typography align="center" color="textSecondary" style={style.headerStyle}>Death Saves</Typography>
      <Typography align="center" color="textSecondary" style={{ fontSize: 13, paddingTop: 2, marginBottom: -10 }}>Successes</Typography>
      <DeathSaveRadio id="successes" deathSaves={deathSaves} setDeathSaves={setDeathSaves} />
      <Typography
        align="center"
        color="textSecondary"
        style={{
          fontSize: 13, paddingTop: 2, marginBottom: -10, marginTop: -10,
        }}
      >
        Failures
      </Typography>
      <DeathSaveRadio id="failures" deathSaves={deathSaves} setDeathSaves={setDeathSaves} />
    </Paper>
  );
};

export default DeathSaveComponent;

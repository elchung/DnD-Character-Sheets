import Paper from '@material-ui/core/Paper';
import DeathSaveRadio from './Reusable/DeathSaveRadio';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import {
  useCharacterState,
  useSetCharacterState,
} from '../../Context/CharacterContext';

const DeathSaveComponent = () => {
  const { deathSaves, style } = useCharacterState();
  const { setDeathSaves } = useSetCharacterState();

  return (
    <Paper style={style.deathSaveComponent} variant="outlined">
      <Typography align="center" color="textSecondary" style={style.headerStyle}>Death Saves</Typography>
      <Typography align="center" color="textSecondary" style={{ fontSize: 13, paddingTop: 2, marginBottom: -10 }}>Successes</Typography>
      <DeathSaveRadio deathSaves={deathSaves} id="successes" setDeathSaves={setDeathSaves} />
      <Typography
        align="center"
        color="textSecondary"
        style={{
          fontSize: 13, paddingTop: 2, marginBottom: -10, marginTop: -10,
        }}
      >
        Failures
      </Typography>
      <DeathSaveRadio deathSaves={deathSaves} id="failures" setDeathSaves={setDeathSaves} />
    </Paper>
  );
};

export default DeathSaveComponent;

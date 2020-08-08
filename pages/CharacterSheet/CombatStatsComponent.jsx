import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import SingleItemDisplayComponent from './SingleItemDisplayComponent';
import HitPointComponent from './HitPointComponent';
import DeathSaveComponent from './DeathSaveComponent';
import {
  useCharacterState,
  useSetCharacterState,
} from '../Context/CharacterContext';

const CombatStatsComponent = ({
}) => {
  const {
    maxHP, initiative, speed, style,
  } = useCharacterState();
  const { setMaxHP, setInitiative, setSpeed } = useSetCharacterState();

  return (
    <Paper elevation={style.elevation} style={style.combatStateComponent}>
      <Grid container spacing={2} direction="column">
        <Grid item>
          <Grid container direction="row" spacing={2} justify="space-evenly" alignItems="center">
            <Grid item>
              <SingleItemDisplayComponent header="Max HP" value={maxHP} updateValue={setMaxHP} />
            </Grid>
            <Grid item>
              <SingleItemDisplayComponent header="Initiative" value={initiative} updateValue={setInitiative} />
            </Grid>
            <Grid item>
              <SingleItemDisplayComponent header="Speed" value={speed} updateValue={setSpeed} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item alignItems="center" style={{ paddingLeft: '5%', paddingRight: '5%' }}>
          <HitPointComponent style={style} />
        </Grid>
        <Grid item>
          <Grid container direction="row" spacing={2} justify="center" alignItems="center">
            <Grid item>
              <DeathSaveComponent />
            </Grid>
            <Grid item />
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CombatStatsComponent;

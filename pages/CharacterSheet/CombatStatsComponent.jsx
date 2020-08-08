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
    maxHP, initiative, speed, armorClass, style,
  } = useCharacterState();
  const {
    setMaxHP, setInitiative, setSpeed, setArmorClass,
  } = useSetCharacterState();

  return (
    <Paper elevation={style.elevation} style={style.combatStatsComponent}>
      <Grid container spacing={2} direction="column">
        <Grid item>
          <Grid container direction="row" justify="space-evenly">
            <Grid item>
              <SingleItemDisplayComponent header="Max HP" value={maxHP} updateValue={setMaxHP} />
            </Grid>
            <Grid item>
              <SingleItemDisplayComponent header="Initiative" value={initiative} updateValue={setInitiative} />
            </Grid>
            <Grid item>
              <SingleItemDisplayComponent header="Armor Class" value={armorClass} updateValue={setArmorClass} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item style={{ paddingLeft: 26 }}>
          <HitPointComponent />
        </Grid>
        <Grid item style={{ paddingLeft: 0 }}>
          <Grid container direction="row" spacing={2} justify="space-evenly">
            <Grid item>
              <DeathSaveComponent />
            </Grid>
            <Grid item>
              <SingleItemDisplayComponent header="Speed" value={speed} updateValue={setSpeed} />
            </Grid>
            <Grid item />
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CombatStatsComponent;

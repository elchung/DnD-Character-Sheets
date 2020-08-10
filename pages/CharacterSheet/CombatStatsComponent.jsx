import Grid from '@material-ui/core/Grid';
import HitPointComponent from './HitPointComponent';
import Paper from '@material-ui/core/Paper';
import {
  useCharacterState,
  useSetCharacterState,
} from '../Context/CharacterContext';
import DeathSaveComponent from './DeathSaveComponent';
import HitDieComponent from './HitDieComponent';
import React from 'react';
import SingleItemDisplayComponent from './SingleItemDisplayComponent';

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
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <Grid container direction="row" justify="space-evenly">
            <Grid item>
              <SingleItemDisplayComponent header="Max HP" updateValue={setMaxHP} value={maxHP} />
            </Grid>
            <Grid item>
              <SingleItemDisplayComponent header="Initiative" updateValue={setInitiative} value={initiative} />
            </Grid>
            <Grid item>
              <SingleItemDisplayComponent header="Armor Class" updateValue={setArmorClass} value={armorClass} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item style={{ paddingLeft: 26 }}>
          <HitPointComponent />
        </Grid>
        <Grid item style={{ paddingLeft: 26 }}>
          <Grid container direction="row" justify="space-evenly" spacing={2}>
            <Grid item>
              <DeathSaveComponent />
            </Grid>
            <Grid item>
              <HitDieComponent />
            </Grid>
            <Grid item>
              <SingleItemDisplayComponent header="Speed" updateValue={setSpeed} value={speed} />
            </Grid>
            <Grid item />
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CombatStatsComponent;

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import React from 'react';
import HitPointComponent from './HitPointComponent';
import {
  useCharacterState,
  useSetCharacterState,
} from '../../Context/CharacterContext';
import DeathSaveComponent from './DeathSaveComponent';
import HitDieComponent from './HitDieComponent';
import SingleItemDisplayComponent from './Reusable/SingleItemDisplayComponent';

const CombatStatsComponent = () => {
  const {
    maxHP, initiative, speed, armorClass, proficiencyBonus, inspiration, style,
  } = useCharacterState();
  const {
    setMaxHP, setInitiative, setSpeed, setArmorClass, setProficiencyBonus, setInspiration
  } = useSetCharacterState();

  return (
    <Paper elevation={style.elevation} style={style.combatStatsComponent}>
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <Grid container direction="row" justify="space-evenly">
            <Grid item>
              <SingleItemDisplayComponent header="Initiative" updateValue={setInitiative} value={initiative} />
            </Grid>
            <Grid item>
              <SingleItemDisplayComponent header="Speed" updateValue={setSpeed} value={speed} />
            </Grid>
            <Grid item>
              <SingleItemDisplayComponent header="Armor Class" updateValue={setArmorClass} value={armorClass} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction='row' justify='center' spacing={2}>
            <Grid item>
              <HitPointComponent />
            </Grid>
            <Grid item>
              <SingleItemDisplayComponent header="Proficiency Bonus" updateValue={setProficiencyBonus} value={proficiencyBonus}/>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="row" justify="center" spacing={2}>
            <Grid item>
              <DeathSaveComponent />
            </Grid>
            <Grid item>
              <HitDieComponent />
            </Grid>
            <Grid item>
              <SingleItemDisplayComponent value={inspiration} updateValue={setInspiration} header="Inspiration" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CombatStatsComponent;

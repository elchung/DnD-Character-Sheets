import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import SingleItemDisplayComponent from './SingleItemDisplayComponent';
import HitPointComponent from './HitPointComponent';
import { useStore } from '../Context/store';

const CombatStatsComponent = ({
  armorClass,
  setArmorClass, // see setter for initiative
  initiative,
  setInitiative, // may just want to disable initiative and set it via calculation
  speed,
  setSpeed, // see setter for initiative
  maxHP, // might also consider passing in character level here?
  setMaxHP,
  currentHP, // can combine hp stats to one
  setCurrentHP,
  tempHP,
  setTempHP,
  hitDice, // {numDice: number, diceType: number}
  currentHitDice, // {successes: number, failures: number}
  setCurrentHitDice,
  deathSaves,
  setDeathSaves,
  style,
}) => (
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
      <Grid item alignItems="center" justify="center" style={{ paddingLeft: '5%', paddingRight: '5%' }}>
        <HitPointComponent
          currentHP={currentHP}
          setCurrentHP={setCurrentHP}
          tempHP={tempHP}
          setTempHP={setTempHP}
          style={style}
        />
      </Grid>
      <Grid item>
        <Grid container direction="row" spacing={2} justify="center" alignItems="center">
          <Grid item>
            <Paper variant="outlined">
              <Typography align="center" color="textSecondary" style={style.headerStyle}>Hit Dice</Typography>
            </Paper>
          </Grid>
          <Grid item>
            <Paper variant="outlined">
              <Typography align="center" color="textSecondary" style={style.headerStyle}>Death Saves</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Paper>
);

CombatStatsComponent.propTypes = {
  armorClass: PropTypes.number.isRequired,
  setArmorClass: PropTypes.func.isRequired,
  initiative: PropTypes.number.isRequired,
  setInitiative: PropTypes.func.isRequired,
  speed: PropTypes.number.isRequired,
  setSpeed: PropTypes.func.isRequired,
  maxHP: PropTypes.number.isRequired,
  setMaxHP: PropTypes.func.isRequired,
  currentHP: PropTypes.number.isRequired,
  setCurrentHP: PropTypes.func.isRequired,
  tempHP: PropTypes.number.isRequired,
  setTempHP: PropTypes.func.isRequired,
  hitDice: PropTypes.number.isRequired,
  currentHitDice: PropTypes.objectOf(PropTypes.object).isRequired,
  setCurrentHitDice: PropTypes.func.isRequired,
  deathSaves: PropTypes.objectOf(PropTypes.object).isRequired,
  setDeathSaves: PropTypes.func.isRequired,
  style: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default CombatStatsComponent;

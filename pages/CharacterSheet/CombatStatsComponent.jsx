import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const CombatStatsComponent = ({
  armorClass,
  setArmorClass, //see setter for initiative
  initiative,
  setInitiative, //may just want to disable initiative and set it via calculation
  speed,
  setSpeed, //see setter for initiative
  maxHP, //might also consider passing in character level here?
  setMaxHP,
  currentHP, //can combine hp stats to one
  setCurrentHP,
  hitDice, //{numDice: number, diceType: number}
  currentHitDice,  //{successes: number, failures: number}
  setcurrentHitDice,
  deathSaves,
  setDeathSaves,
  style,
}) => {


  return (
    <Paper elevation={style.elevation} style={style.savingThrowComponent}>
      <Grid container spacing={2} direction="column">
        <Grid item>
          <Grid container direction="row">
            <Grid item>
              <Paper variant="outlined">
                <Typography align="center" color="textSecondary" style={style.headerStyle}>Armor Class</Typography>
              </Paper>
            </Grid>
            <Grid item>
              <Paper variant="outlined">
                <Typography align="center" color="textSecondary" style={style.headerStyle}>Initiative</Typography>
              </Paper>
            </Grid>
            <Grid item>
              <Paper variant="outlined">
                <Typography align="center" color="textSecondary" style={style.headerStyle}>Speed</Typography>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Paper variant="outlined">
            <Typography variant="subtitle1">Maximum Hit Points</Typography>
            <Typography align="center" color="textSecondary" style={style.headerStyle}>Current Hit Points</Typography>
            <Typography variant="subtitle1">Temp Hit Points</Typography>
          </Paper>
        </Grid>
        <Grid item>
          <Grid container>
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
};

CombatStatsComponent.propTypes = {
  setArmorClass: PropTypes.func.isRequired,
  initiative: PropTypes.number.isRequired,
  setInitiative: PropTypes.func.isRequired,
  speed: PropTypes.number.isRequired,
  setSpeed: PropTypes.func.isRequired,
  maxHP: PropTypes.number.isRequired,
  setMaxHP: PropTypes.func.isRequired,
  currentHP: PropTypes.number.isRequired,
  setCurrentHP: PropTypes.func.isRequired,
  hitDice: PropTypes.number.isRequired,
  currentHitDice: PropTypes.objectOf(PropTypes.object).isRequired,
  setcurrentHitDice: PropTypes.func.isRequired,
  deathSaves: PropTypes.objectOf(PropTypes.object).isRequired,
  setDeathSaves: PropTypes.func.isRequired,
  style: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default CombatStatsComponent;

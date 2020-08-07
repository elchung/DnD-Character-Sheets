import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import SingleItemDisplayComponent from './SingleItemDisplayComponent';
import HitPointComponent from './HitPointComponent';
import {
  useCharacterState,
  useSetCharacterState,
} from '../Context/CharacterContext';

const CombatStatsComponent = ({
  style,
}) => {
  const characterState = useCharacterState();
  const setCharacterState = useSetCharacterState();

  return (
    <Paper elevation={style.elevation} style={style.combatStateComponent}>
      <Grid container spacing={2} direction="column">
        <Grid item>
          <Grid container direction="row" spacing={2} justify="space-evenly" alignItems="center">
            <Grid item>
              <SingleItemDisplayComponent header="Max HP" value={characterState.maxHP} updateValue={setCharacterState.setMaxHP} />
            </Grid>
            <Grid item>
              <SingleItemDisplayComponent header="Initiative" value={characterState.initiative} updateValue={setCharacterState.setInitiative} />
            </Grid>
            <Grid item>
              <SingleItemDisplayComponent header="Speed" value={characterState.speed} updateValue={setCharacterState.setSpeed} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item alignItems="center" justify="center" style={{ paddingLeft: '5%', paddingRight: '5%' }}>
          <HitPointComponent style={style} />
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
};

CombatStatsComponent.propTypes = {
  style: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default CombatStatsComponent;

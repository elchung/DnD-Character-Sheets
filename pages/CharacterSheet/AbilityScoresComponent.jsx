import React from 'react';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Paper from '@material-ui/core/Paper';
import BaseAbilityScoreComponent from './BaseAbilityScoreComponent'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

export const AbilityScoreComponent = ({
    scoreOnTop, setScoreOnTop,
    strScore, setStrScore,
    dexScore, setDexScore,
    conScore, setConScore,
    intScore, setIntScore,
    wisScore, setWisScore,
    chaScore, setChaScore
}) => {
  return (
    <Paper Elevation={3} width={10}>
      <Grid container spacing={4} direction="column" justify="center" alignItems="center" wrap="nowrap">
        <Grid item>
          <FormControlLabel
            control={
              <Switch
                size="small"
                checked={!scoreOnTop}
                onChange={() => setScoreOnTop(state => !state)}
                color="primary"
              />
            }
          />
        </Grid>
        <Grid item>
          <BaseAbilityScoreComponent
            ability="Strength"
            abilityScore={strScore}
            setAbilityScore={setStrScore}
            scoreOnTop={scoreOnTop}
          />
        </Grid>
        <Grid item>
          <BaseAbilityScoreComponent
            ability="Dexterity"
            abilityScore={dexScore}
            setAbilityScore={setDexScore}
            scoreOnTop={scoreOnTop}
          />
        </Grid>
        <Grid item>
          <BaseAbilityScoreComponent
            ability="Constitution"
            abilityScore={conScore}
            setAbilityScore={setConScore}
            scoreOnTop={scoreOnTop}
          />
        </Grid>
        <Grid item>
          <BaseAbilityScoreComponent
            ability="Intellegence"
            abilityScore={intScore}
            setAbilityScore={setIntScore}
            scoreOnTop={scoreOnTop}
          />
        </Grid>
        <Grid item>
          <BaseAbilityScoreComponent
            ability="Wisdon"
            abilityScore={wisScore}
            setAbilityScore={setWisScore}
            scoreOnTop={scoreOnTop}
          />
        </Grid>
        <Grid item>
          <BaseAbilityScoreComponent
            ability="Charisma"
            abilityScore={chaScore}
            setAbilityScore={setChaScore}
            scoreOnTop={scoreOnTop}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default AbilityScoreComponent;
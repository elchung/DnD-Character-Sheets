import React from 'react';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Card from '@material-ui/core/Card';
import BaseAbilityScoreComponent from './BaseAbilityScoreComponent'
import Grid from '@material-ui/core/Grid';

export const AbilityScoreComponent = ({
    scoreOnTop, setScoreOnTop,
    strScore, setStrScore,
    dexScore, setDexScore,
    conScore, setConScore,
    intScore, setIntScore,
    wisScore, setWisScore,
    chaScore, setChaScore,
    style
}) => {
  return (
    <Card elevation={style.elevation} style={{ width: 125, paddingBottom: 10 }}>
      <Grid container spacing={1} direction="column" justify="center" alignItems="center" wrap="nowrap">
        <Grid item>
          <FormControlLabel
            control={
              <Switch
                size="small"
                checked={!scoreOnTop}
                onChange={() => setScoreOnTop(state => !state)}
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
    </Card>
  );
}

export default AbilityScoreComponent;
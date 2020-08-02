import React from 'react';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Paper from '@material-ui/core/Paper';
import BaseAbilityScoreComponent from './BaseAbilityScoreComponent'

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
    <Paper Elevation={3}>
      <FormControlLabel
        control={
          <Switch
            size="small"
            checked={!scoreOnTop}
            onChange={() => setScoreOnTop(state => !state)}
            color="primary"
          />
        }
        label="Small"
      />
      <BaseAbilityScoreComponent
        ability="Strength"
        abilityScore={strScore}
        setAbilityScore={setStrScore}
        scoreOnTop={scoreOnTop}
      />
      <BaseAbilityScoreComponent
        ability="Dexterity"
        abilityScore={dexScore}
        setAbilityScore={setDexScore}
        scoreOnTop={scoreOnTop}
      />
      <BaseAbilityScoreComponent
        ability="Constitution"
        abilityScore={conScore}
        setAbilityScore={setConScore}
        scoreOnTop={scoreOnTop}
      />
      <BaseAbilityScoreComponent
        ability="Intellegence"
        abilityScore={intScore}
        setAbilityScore={setIntScore}
        scoreOnTop={scoreOnTop}
      />
      <BaseAbilityScoreComponent
        ability="Wisdon"
        abilityScore={wisScore}
        setAbilityScore={setWisScore}
        scoreOnTop={scoreOnTop}
      />
      <BaseAbilityScoreComponent
        ability="Charisma"
        abilityScore={chaScore}
        setAbilityScore={setChaScore}
        scoreOnTop={scoreOnTop}
      />
    </Paper>
  );
}

export default AbilityScoreComponent;